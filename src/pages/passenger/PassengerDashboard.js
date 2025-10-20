import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './passengerdashboard.css';
import { Link, useNavigate } from 'react-router-dom';

// Custom bus icon for map
const busIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61088.png',
  iconSize: [35, 35],
});

const PassengerDashboard = () => {
  const navigate = useNavigate();
  const [fromLocation, setFromLocation] = useState('Current Location');
  const [toDestination, setToDestination] = useState('');
  const [bookingFrom, setBookingFrom] = useState('Galle');
  const [bookingTo, setBookingTo] = useState('Colombo');
  const [boardingPoint, setBoardingPoint] = useState('Rathgama');
  const [travelDate, setTravelDate] = useState('2025-09-29');

  // Example coordinates (Colombo area)
  const buses = [
    { id: 1, lat: 6.9271, lng: 79.8612, name: 'Bus 138A' },
    { id: 2, lat: 6.9301, lng: 79.8702, name: 'Bus 138B' },
  ];

  return (
    <div className="bus-portal">
      <h1 className="dashboard-title">Smart Public Bus Management System</h1>

      {/* Navigation Tabs */}
      <div className="tabs">
        <button className="tab">Admin Dashboard</button>
        <button className="tab">Staff Interface</button>
        <button className="tab active">Passenger Portal</button>
      </div>

      <div className="content-grid">
        {/* Find Your Bus Section */}
        <div className="card find-bus-card">
          <div className="card-header">
            <span className="icon">🔍</span>
            <h2>Find Your Bus</h2>
          </div>
          <div className="card-body0">
            <div className="input-group">
              <input
                type="text"
                className="input-field"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                placeholder="From: Current Location"
              />
            </div>
            <div className="input-group-inline">
              <input
                type="text"
                className="input-field"
                value={toDestination}
                onChange={(e) => setToDestination(e.target.value)}
                placeholder="To: Enter Destination"
              />
              <button className="btn-search">Search</button>
            </div>

            <div className="bus-route">
              <div className="route-header">
                <span className="route-number">Route 138 - Colombo to Kandy</span>
                <span className="arrival-time">Arrives in 8 min</span>
              </div>
              <div className="route-details">
                <span>Next Bus</span>
                <span>Available Seats: 12/40</span>
              </div>
              <button className="btn-track">Track</button>
            </div>

            <div className="bus-route">
              <div className="route-header">
                <span className="route-number">Route 245 - Express Service</span>
                <span className="arrival-time">Arrives in 13 min</span>
              </div>
              <div className="route-details">
                <span>Next Bus</span>
                <span>Available Seats: 25/40</span>
              </div>
              <button className="btn-track">Track</button>
            </div>
          </div>
        </div>

        {/* Book Your Ticket Section */}
        <div className="card book-ticket-card">
          <div className="card-header">
            <span className="icon">🎫</span>
            <h2>Book Your Ticket</h2>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>FROM:</label>
              <input
                type="text"
                className="input-field-booking"
                value={bookingFrom}
                onChange={(e) => setBookingFrom(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>TO:</label>
              <input
                type="text"
                className="input-field-booking"
                value={bookingTo}
                onChange={(e) => setBookingTo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Boarding Point:</label>
              <input
                type="text"
                className="input-field-booking"
                value={boardingPoint}
                onChange={(e) => setBoardingPoint(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Travel Date:</label>
              <input
                type="date"
                className="input-field-booking"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
              />
            </div>
            <button className="btn-search-buses" onClick={()=>navigate("/bus_booking")}>Search Buses</button>
          </div>
        </div>

        {/* Live Bus Tracking Section */}
        <div className="card tracking-card">
          <div className="card-header">
            <span className="icon">📍</span>
            <h2>Live Bus Tracking</h2>
          </div>
          <div className="card-body tracking-body">
            <div className="live-badge">LIVE</div>
            <div className="map-placeholder">
              {/* OpenStreetMap Integration */}
              <MapContainer center={[6.9271, 79.8612]} zoom={13} style={{ height: '300px', width: '100%', borderRadius: '10px' }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {buses.map((bus) => (
                  <Marker key={bus.id} position={[bus.lat, bus.lng]} icon={busIcon}>
                    <Popup>{bus.name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
              <div className="eta-box">
                <p className="eta-label">ETA: 8 minutes</p>
                <button className="btn-alert">Set Alert (1km away)</button>
              </div>
            </div>
          </div>
        </div>

        {/* My Profile Section */}
        <div className="card profile-card">
          <div className="card-header">
            <span className="icon">👤</span>
            <h2>My Profile</h2>
          </div>
          <div className="card-body10">
            <div className="profile-info">
              <div className="profile-item">
                <span className="profile-icon">👤</span>
                <span>Saman Jayawardena</span>
              </div>
              <div className="profile-item">
                <span className="profile-icon">📧</span>
                <span>saman@email.com</span>
              </div>
              <div className="profile-item">
                <span className="profile-icon">📱</span>
                <span>+94 77 123 4567</span>
              </div>
            </div>
            <button className="btn-edit-profile" onClick={()=>navigate("/passenger_edit_profile")}>Edit Profile</button>
            <div className="profile-actions">
              <button className="btn-action" onClick={()=>navigate("/passenger_feedback")}>Submit Feedback</button>
              <button className="btn-action" onClick={()=>navigate("/passenger_help_support")}>Help & Support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerDashboard;
