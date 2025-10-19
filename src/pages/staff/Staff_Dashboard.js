import React, { useState } from 'react';
import './staff_dashboard.css';
import { Link, useNavigate } from 'react-router-dom';

const StaffDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('staff');

  return (
    <div className="container">
      <h1 className="dashboard-title">Smart Public Bus Management System</h1>

      {/* Navigation Tabs */}
      <div className="tabs">
        <button className="tab">Admin Dashboard</button>
        <button className="tab active">Staff Interface</button>
        <button className="tab">Passenger Portal</button>
      </div>

      <div className="main-content">
        <div className="dashboard-section">
          <div className="section-header">
            <span className="icon">🚌</span>
            <h2>Staff Dashboard</h2>
          </div>
          
          <div className="status-card">
            <div className="status-header">
              <span className="status-indicator"></span>
              <strong>Status: On Duty</strong>
            </div>
            <p>Shift: 06:00 - 14:00 | Route: 138 Colombo-Kandy</p>
            <p>GPS: Active | Logs: Updated: Just now</p>
          </div>

          <div className="trip-info">
            <h3>Current Trip</h3>
            <p className="route">Colombo → Kandy <span className="next-stop">Next Stop: Kadawatha (5 min)</span></p>
            <p>Passengers: 28/50 | Trip Progress: 45%</p>
          </div>

          <div className="button-grid">
            <button className="btn btn-primary">Start GPS Sharing</button>
            <button className="btn btn-danger">Stop GPS Sharing</button>
            <button className="btn btn-primary">Mark Attendance</button>
            <button className="btn btn-danger">Notify Unavailability</button>
          </div>

          <button className="btn btn-emergency">🆘 SOS Emergency Alert</button>
        </div>

        <div className="schedule-section">
          <div className="section-header">
            <span className="icon">📅</span>
            <h2>Today's Schedule</h2>
          </div>

          <div className="trip-item">
            <div className="trip-header">
              <span className="trip-title">Trip 1: Colombo → Kandy</span>
              <span className="badge badge-completed">Completed</span>
            </div>
            <div className="trip-details">
              <span>06:00 - 09:30 | Status: Completed ✅</span>
              <span className="badge badge-not-yet">Not Yet</span>
            </div>
          </div>

          <div className="trip-item">
            <div className="trip-header">
              <span className="trip-title">Trip 2: Kandy → Colombo</span>
              <span className="badge badge-completed">Completed</span>
            </div>
            <div className="trip-details">
              <span>10:00 - 13:30 | Status: In Progress 🚌</span>
              <span className="badge badge-not-yet">Not Yet</span>
            </div>
          </div>

          <div className="trip-item">
            <div className="trip-header">
              <span className="trip-title">Trip 3: Colombo → Kandy</span>
              <span className="badge badge-completed">Completed</span>
            </div>
            <div className="trip-details">
              <span>14:00 - 17:30 | Status: Upcoming ⏰</span>
              <span className="badge badge-not-yet">Not Yet</span>
            </div>
          </div>
        </div>

        <div className="navigation-section">
          <div className="section-header">
            <span className="icon">🗺️</span>
            <h2>Navigation & Controls</h2>
          </div>

          <div className="bus-number">
            <span className="bus-label">138</span>
            <span className="you-label">You</span>
          </div>

          <div className="map-container">
            <div className="map-header">
              <span className="map-icon">🗺️</span>
              <strong>Live Route Map</strong>
            </div>
            <div className="map-content">
              <p>Current Location: Kadawatha</p>
              <p>Next Stop: Kiribathgoda (3.2 km)</p>
            </div>
            <div className="map-footer">
              <p>Speed: 45 km/h</p>
              <p>ETA Colombo: 2h 15min</p>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <div className="section-header">
            <span className="icon">👤</span>
            <h2>Staff Profile</h2>
          </div>

          <div className="profile-card">
            <div className="profile-info">
              <p><span className="profile-icon">👤</span> <strong>Saman Jayawardena</strong></p>
              <p><span className="profile-icon">📧</span> samanj@email.com</p>
              <p><span className="profile-icon">📱</span> +94 77 123 4567</p>
            </div>
          </div>

          <button className="btn btn-edit" onClick={()=>navigate("/edit_staff_profile")}>Edit Profile</button>
          
          <div className="profile-actions">
            <button className="btn btn-secondary" onClick={()=>navigate("/staff_feedback")}>Submit Feedback</button>
            <button className="btn btn-secondary" onClick={()=>navigate("/staff_help_support")}>Help & Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;