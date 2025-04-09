import React, { useState, useRef } from 'react';
import '../styles/BookNow.css';
import Navbar from '../componets/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const API = process.env.REACT_APP_API_URL;
const token = localStorage.getItem("token"); 

function BookNow() {
  const form = useRef();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    eventType: '',
    shootPlace: '',
    fromDate: '',
    toDate: '',
    contactNumber: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    const {
      fullName,
      email,
      eventType,
      shootPlace,
      fromDate,
      toDate,
      contactNumber
    } = formData;

    // Validation
    if (
      !fullName ||
      !email ||
      !eventType ||
      !fromDate ||
      !toDate ||
      !contactNumber ||
      (['birthday', 'pre-wedding', 'others'].includes(eventType) && !shootPlace)
    ) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      // Send Email using EmailJS
      await emailjs.sendForm(
        'service_8qsmjig',
        'template_ske3rql',
        form.current,
        'zEsOkKCEFZXm1dtok'
      );
      console.log("Email sent successfully!");

      // Save to Backend
  
      console.log("token",token);
      await axios.post(`${API}/api/register-booking`, {
        fullName,
        email,
        eventType,
        shootPlace,
        fromDate,
        toDate,
        contactNumber
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });


      setSuccessMessage('Booked successfully! Redirecting...');
      setFormData({
        fullName: '',
        email: '',
        eventType: '',
        shootPlace: '',
        fromDate: '',
        toDate: '',
        contactNumber: ''
      });

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error("Booking failed", error);
      setErrorMessage('Failed to book. Please try again later.');
    }
  };

  return (
    <div className="fullbook">
      <Navbar />
      <h2 className="container2">Book Now</h2>
      <form onSubmit={handleSubmit} className="containerbook" ref={form}>
        <div className="fullclass">
          <label className="labelfull" htmlFor="fullName">Full Name:</label>
          <input
            className="full"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="labelemail" htmlFor="email">Email:</label>
          <input
            className="full"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="eventType">Event Type:</label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          >
            <option value="">Select Event Type</option>
            <option value="wedding">Wedding</option>
            <option value="pre-wedding">Pre-Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="naming">Naming Ceremony</option>
            <option value="Saree">Saree Ceremony</option>
            <option value="house-warming">House Warming</option>
            <option value="others">Other</option>
          </select>
        </div>

        {['birthday', 'pre-wedding', 'others'].includes(formData.eventType) && (
          <div>
            <label htmlFor="shootPlace">Shoot Place:</label>
            <select
              className="shoot"
              id="shootPlace"
              name="shootPlace"
              value={formData.shootPlace}
              onChange={handleChange}
              required
            >
              <option value="">Select Shoot Place</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Goa">Goa</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Agra">Agra</option>
              <option value="Delhi">Delhi</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Udaipur">Udaipur</option>
              <option value="Pune">Pune</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
        )}

        <div>
          <label className="labelfull" htmlFor="fromDate">From Date:</label>
          <input
            className="from"
            type="date"
            id="fromDate"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        <div>
          <label className="labelemail" htmlFor="toDate">To Date:</label>
          <input
            className="from"
            type="date"
            id="toDate"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            min={formData.fromDate}
            required
          />
        </div>

        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            className="contact"
            type="text"
            id="contactNumber"
            name="contactNumber"
            placeholder="Enter your Mobile Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookNow;
