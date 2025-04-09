import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from 'axios';
import Navbar from "../componets/Navbar";
import "../styles/PieChart.css";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Piechart() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/api/booked`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const eventTypes = bookings.map(item => item.eventType);
  const eventTypeCounts = eventTypes.reduce((acc, eventType) => {
    acc[eventType] = (acc[eventType] || 0) + 1;
    return acc;
  }, {});

  const seriesData = Object.values(eventTypeCounts);
  const categories = Object.keys(eventTypeCounts);

  return (
    <div className="pie-container">
      <Navbar />
      <div className="chart-header">
        <button onClick={() => navigate("/bookedDetails")} className="backbut">
          Go Back
        </button>
        <h3>Booking Progress</h3>
      </div>
      <div className="chart-wrapper">
        <Chart
          type="pie"
          className="piechart"
          width="100%"
          height={400}
          series={seriesData}
          options={{
            title: { text: "" },
            noData: { text: "Loading..." },
            labels: categories,
            responsive: [
              {
                breakpoint: 768,
                options: {
                  chart: { width: "100%" },
                  legend: { position: "bottom" }
                }
              }
            ]
          }}
        />
      </div>
    </div>
  );
}

export default Piechart;
