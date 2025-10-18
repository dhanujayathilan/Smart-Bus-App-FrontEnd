import React from "react";
import "./admin_send_alert.css";
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-containerr">
      <h1 className="title">Smart Public Bus Management System</h1>

      <div className="tab-container">
        <button className="tab active">Admin Dashboard</button>
        <button className="tab">Driver Interface</button>
        <button className="tab">Passenger Portal</button>
      </div>

      <div className="content-box">
        <div className="help-header">Send Alerts</div>

        <div className="form-box">
          <label>Subject:</label>
          <input type="text" className="input-field" placeholder="Enter subject" />

          <label>Alert:</label>
          <textarea className="textarea-field" placeholder="Enter alert message"></textarea>

          <div className="button-row">
            <button className="btn cancel" onClick={()=>navigate("/admindashboard")}>Cancel</button>
            <button className="btn send">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;