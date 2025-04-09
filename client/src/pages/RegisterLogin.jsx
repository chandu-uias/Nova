import React, { useState } from 'react';
import '../styles/RegisterLogin.css';
import Navbar from '../componets/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // ✅ import auth context

const API = process.env.REACT_APP_API_URL;

function RegisterLogin() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(true);
  const [loginSuccessMessage, setLoginSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const { isLoggedIn, login, logout } = useAuth(); // ✅ use context functions

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoginSuccessMessage('');

    if (isRegistering) {
      // REGISTER
      try {
        const res = await axios.post(`${API}/api/auth/register`, {
          username, email, password, mobile
        });
        setLoginSuccessMessage(res.data.message || 'Registered successfully');
        setIsRegistering(false); // Go back to login mode
      } catch (err) {
        console.error('Registration error:', err);
        setErrorMessage(err.response?.data?.message || 'Failed to register. Try again.');
      }

    } else if (isUserLogin) {
      // USER LOGIN
      try {
        const res = await axios.post(`${API}/api/auth/login`, {
          email, password
        });

        const token = res.data.token;
        console.log("User token: ", token);
        login(token); // ✅ set token in context/localStorage
        setLoginSuccessMessage(res.data.message || 'Login successful');
        setTimeout(() => navigate('/'), 1000);
      } catch (err) {
        console.error('User login error:', err);
        setErrorMessage(err.response?.data?.message || 'Login failed');
      }

    } else {
      // ADMIN LOGIN
      try {
        const res = await axios.post(`${API}/api/auth/admin-login`, {
          email, password
        });

        const token = res.data.token;
        console.log("User token: ", token);
        login(token); // ✅ same context login
        console.log("Navigating to bookedDetails...");
        setLoginSuccessMessage(res.data.message || 'Admin login successful');
        setTimeout(() => navigate('/bookedDetails'), 1000);
      } catch (err) {
        console.error('Admin login error:', err);
        setErrorMessage(err.response?.data?.message || 'Admin login failed');
      }
    }
  };

  const handleRegisterSwitch = () => {
    setIsRegistering(true);
    setIsUserLogin(true);
    resetMessages();
  };

  const handleUserLoginSwitch = () => {
    setIsUserLogin(true);
    setIsRegistering(false);
    resetMessages();
  };

  const handleAdminLoginSwitch = () => {
    setIsUserLogin(false);
    setIsRegistering(false);
    resetMessages();
  };

  const resetMessages = () => {
    setErrorMessage('');
    setLoginSuccessMessage('');
  };

  return (
    <div>
      <Navbar /> {/* ✅ no manual props needed */}
      <div className="container">
        <div className="form-wrapper">

          {isRegistering ? (
            <>
              <h2 className='loginh2'>Register</h2>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  minLength={8}
                  title="Password must have 8+ chars, one capital, one special char"
                />
                {password && (
                  <small className="text-danger">
                    {password.length < 8 && "Min 8 characters. "}
                    {!/(?=.*[A-Z])/.test(password) && "One uppercase letter required. "}
                    {!/(?=.*[@$!%*?&])/.test(password) && "One special character required. "}
                  </small>
                )}
                <input type="tel" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />

                {loginSuccessMessage && <p className="success-message">{loginSuccessMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="submit" className="loginbutton">Register</button>
              </form>
              <p>Already have an account? <button onClick={() => setIsRegistering(false)} className="link"><b>Login here</b></button></p>
            </>
          ) : (
            <>
              <h2 className='loginh2'>{isUserLogin ? 'User Login' : 'Admin Login'}</h2>
              <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                {loginSuccessMessage && <p className="success-message">{loginSuccessMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="submit" className="loginbutton">
                  {isUserLogin ? 'Login' : 'Login'}
                </button>
              </form>

              <button className="switch-button" onClick={isUserLogin ? handleAdminLoginSwitch : handleUserLoginSwitch}>
                {isUserLogin ? 'Switch to Admin Login' : 'Switch to User Login'}
              </button>
              <p>Don't have an account? <button onClick={handleRegisterSwitch} className="link"><b>Register here</b></button></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisterLogin;
