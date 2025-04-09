import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import ServiceSection from './pages/ServiceSection';
import BookNow from './pages/BookNow';
import RegisterLogin from './pages/RegisterLogin';
import BookedDetails from './pages/BookedDetails';
import PieChart from './pages/PieChart';
import ProtectedRoute from './componets/ProtectedRoute';


function App() {
  const photographer = {
    name: "nova",
    email: "nova@gmail.com",
    instagram: "novacapture",
    phoneNumber: "9999999999",
    experience: "5"
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs photographer={photographer} />} />
          <Route path="/service" element={<ServiceSection />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route path="/register" element={<RegisterLogin />} />
         <Route path="/bookedDetails" element={<BookedDetails />} />
          {/* ✅ Protected Routes */}
           <Route
             path="/bookedDetails"
             element={
               <ProtectedRoute>
             <BookedDetails />
               </ProtectedRoute>
             }
           />

         <Route
           path="/user-dashboard"
           element={
             <ProtectedRoute>
               {/* <UserDashboard /> */}
             </ProtectedRoute>
           }
           />

          <Route path="/piechart" element={<PieChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
