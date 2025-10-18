import React from "react";
import "./staff_dashboard.css";

const StaffInterface = () => {
  const trips = [
    { id: 1, route: "Colombo → Kandy", time: "06:00 - 09:30", status: "Completed" },
    { id: 2, route: "Kandy → Colombo", time: "10:00 - 13:30", status: "In Progress" },
    { id: 3, route: "Colombo → Kandy", time: "14:00 - 17:30", status: "Upcoming" },
  ];

  return (
    <div className="staff-interface">
      <h1 className="title">Smart Public Bus Management System</h1>

      {/* Tabs */}
      <div className="tabs">
        <button className="tab">Admin Dashboard</button>
        <button className="tab active">Staff Interface</button>
        <button className="tab">Passenger Portal</button>
      </div>

      {/* Layout */}
      <div className="content-grid">

        {/* Staff Dashboard */}
        <div className="card dashboard">
          <h3>🚌 Staff Dashboard</h3>
          <div className="info-box">
            <p><b>Status:</b> On Duty</p>
            <p>Shift: 06:00 - 14:00 | Route: 138 Colombo–Kandy</p>
            <p>GPS Active | Last Update: Just now</p>
          </div>

          <div className="info-box">
            <p><b>Current Trip:</b> Colombo → Kandy</p>
            <p>Next Stop: Kadawatha (5 min)</p>
            <p>Passengers: 28/40 | Trip Progress: 45%</p>
          </div>

          <div className="button-group">
            <button className="btn-green">Start GPS Sharing</button>
            <button className="btn-gray">Stop GPS Sharing</button>
            <button className="btn-blue">Mark Attendance</button>
            <button className="btn-yellow">Notify Unavailability</button>
            <button className="btn-red">SOS Emergency Alert</button>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="card schedule">
          <h3>📅 Today’s Schedule</h3>
          {trips.map((trip) => (
            <div key={trip.id} className="trip-item">
              <p><b>Trip {trip.id}:</b> {trip.route}</p>
              <p>{trip.time}</p>
              <span className={`status ${trip.status.replace(" ", "-").toLowerCase()}`}>
                {trip.status}
              </span>
            </div>
          ))}
        </div>

        {/* Navigation & Controls */}
        <div className="card navigation">
          <h3>🧭 Navigation & Controls</h3>
          <div className="live-map">
            <h4>Live Route Map</h4>
            <p>Current Location: Kadawatha</p>
            <p>Next Stop: Kiribathgoda (3.2 km)</p>
            <div className="speed-box">
              <p>Speed: 45 km/h</p>
              <p>ETA Colombo: 2h 15min</p>
            </div>
          </div>
        </div>

        {/* Staff Profile */}
        <div className="card profile">
          <h3>👤 Staff Profile</h3>
          <div className="info-box">
            <p><b>Saman Jayawardena</b></p>
            <p>📧 saman@gmail.com</p>
            <p>📞 +94 77 123 4567</p>
          </div>
          <div className="button-group">
            <button className="btn-blue">Edit Profile</button>
            <button className="btn-green">Submit Feedback</button>
            <button className="btn-yellow">Help & Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffInterface;
