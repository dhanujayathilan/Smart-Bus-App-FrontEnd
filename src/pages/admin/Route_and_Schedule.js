import React from "react";
import "./route_and_schedule.css";
import { Link, useNavigate } from 'react-router-dom';

function Route_and_Schedule() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Smart Public Bus Management System</h1>

      <div className="tabs2">
        <button className="tab active">Admin Dashboard</button>
        <button className="tab">Staff Interface</button>
        <button className="tab">Passenger Portal</button>
      </div>

      <div className="form-section2">
        <div className="form-header2">Route & Schedule</div>

        <div className="form-body2">
          <div className="form-column">
            <label>Select the city:</label>
            <input type="text" placeholder="Horana" />

            <label>Bus Number:</label>
            <input type="text" placeholder="Select bus number..." />

            <label>Select Conductor:</label>
            <input type="text" placeholder="Select a conductor..." />

            <label>Start Date:</label>
            <input type="date" />
          </div>

          <div className="form-column">
            <label>Select Bus Route:</label>
            <input type="text" placeholder="285" />

            <label>Select Driver:</label>
            <input type="text" placeholder="Choose a driver..." />

            <label>Shift Time:</label>
            <input type="text" placeholder="Select shift..." />
          </div>
        </div>

        <div className="form-buttons">
          <button className="btn back" onClick={()=>navigate("/admindashboard")}>Back</button>
          <button className="btn schedule" onClick={()=>navigate("/route_and_schedule")}>Schedule</button>
        </div>
      </div>
    </div>
  );
}

export default Route_and_Schedule;
