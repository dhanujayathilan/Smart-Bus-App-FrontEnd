// src/pages/LoginPage.jsx
import React from 'react';
//import { Link } from 'react-router-dom';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login to SmartBus</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" onClick={()=>navigate("/admindashboard")}>Login</button>
        </form>
        <p className="switch-link">
          Don’t have an account? <Link to="/passengerregister"><u>Sign up</u></Link>
        </p>
      </div>
    </div>
  );
}