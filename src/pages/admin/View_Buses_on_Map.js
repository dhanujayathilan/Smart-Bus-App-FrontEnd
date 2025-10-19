import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Search } from 'lucide-react';
import './view_buses_on_map.css';
import { Link, useNavigate } from 'react-router-dom';

// Custom bus marker icon
const busIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61088.png',
  iconSize: [32, 32],
});

const ViewBusesonMap = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const routes = [
    {
      id: 1,
      name: 'Route 138 - Colombo to Kandy',
      driver: 'John Perera',
      passengers: '28/40',
      lastUpdate: '2 min ago',
      nextStop: 'Pettah',
      status: 'ACTIVE',
      position: [6.9271, 79.8612], // Colombo
    },
    {
      id: 2,
      name: 'Route 245 - Galle to Matara',
      driver: 'Sunil Silva',
      passengers: '35/45',
      lastUpdate: '5 min ago',
      nextStop: 'Hikkaduwa',
      status: 'DELAYED',
      position: [6.0535, 80.2210], // Galle
    },
    {
      id: 3,
      name: 'Route 177 - Negombo to Airport',
      driver: 'Kamal Fernando',
      passengers: '12/30',
      lastUpdate: '1 min ago',
      nextStop: 'Katunayake',
      status: 'ACTIVE',
      position: [7.2008, 79.8737], // Negombo
    },
  ];

  const filteredRoutes = routes.filter((route) => {
    if (activeFilter === 'All') return true;
    return route.status === activeFilter.toUpperCase();
  });

  return (
    <div className="dashboard-container">
      <h1 className="main-title">Smart Public Bus Management System</h1>

      <div className="tabs">
        <button className="tab active">Admin Dashboard</button>
        <button className="tab">Driver Interface</button>
        <button className="tab">Passenger Portal</button>
      </div>

      <div className="dashboard-header">
        <button className="back-btn" onClick={()=>navigate("/admindashboard")}>Back</button>
        <div className="header-content">
          <span className="header-icon">🚌</span>
          <h2 className="page-title">Fleet Management - Live Tracking</h2>
        </div>
      </div>

      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search routes or buses..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="search-icon" size={20} />
          </div>

          <div className="filter-buttons">
            {['All', 'Active', 'Delayed', 'Maintenance'].map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="routes-list">
            {filteredRoutes.map((route) => (
              <div key={route.id} className={`route-card ${route.status.toLowerCase()}`}>
                <div className="route-header">
                  <h3 className="route-name">{route.name}</h3>
                  <span className={`status-badge ${route.status.toLowerCase()}`}>
                    {route.status}
                  </span>
                </div>
                <div className="route-details">
                  <div className="detail-row">
                    <span className="detail-label">Driver</span>
                    <span className="detail-value">{route.driver}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Passengers</span>
                    <span className="detail-value">{route.passengers}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OpenStreetMap Integration */}
        <div className="map-container">
          <MapContainer center={[7.8731, 80.7718]} zoom={8} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />

            {filteredRoutes.map((route) => (
              <Marker key={route.id} position={route.position} icon={busIcon}>
                <Popup>
                  <strong>{route.name}</strong> <br />
                  Driver: {route.driver} <br />
                  Passengers: {route.passengers} <br />
                  Next Stop: {route.nextStop} <br />
                  Status: {route.status}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ViewBusesonMap;
