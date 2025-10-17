import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>SmartBus Sri Lanka</h1>
        <div className="nav-buttons">
          <p>Login</p>
          <p>Register</p>
        </div>
      </header>

      <main className="hero-section">
        <h2>Next-Gen Public Transport Experience</h2>
        <p>
          Track buses live, book tickets online, receive alerts, and experience
          seamless public transport like never before.
        </p>
        
      </main>

      <footer className="footer">
        &copy; 2025 SmartBus Sri Lanka. All rights reserved.
      </footer>
    </div>
  );
}