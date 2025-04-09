import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "../componets/Navbar";
import '../styles/BookDetails.css';
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function BookDetails() {
  const [bookings, setBookings] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(-1);
  const navigate = useNavigate();

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(-1), 4000);
  };

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/register");
        return;
      }

      const response = await axios.get(`${API}/api/booked`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(response.data);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
      if (error.response && error.response.status === 401) {
        navigate("/register");
      }
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bd">
      <Navbar />
      <div className="progress">
        <h2>All Bookings</h2>
        <button onClick={() => navigate("/piechart")} className="progbut">
          See Progress
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Event Type</th>
              <th>Shoot Place</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Contact Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <td>{booking.fullName}</td>
                <td>{booking.email}</td>
                <td>{booking.eventType}</td>
                <td>{booking.shootPlace}</td>
                <td>{formatDate(booking.fromDate)}</td>
                <td>{formatDate(booking.toDate)}</td>
                <td>{booking.contactNumber}</td>
                <td>
                  <button
                    onClick={() => copyToClipboard(booking.contactNumber, index)}
                    disabled={copiedIndex === index}
                    style={{
                      backgroundColor: copiedIndex === index ? "green" : "",
                      color: copiedIndex === index ? "white" : "",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    {copiedIndex === index ? "Copied" : "Copy"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookDetails;
