import React, { useState } from 'react';
import './officerregister.css'; // Import external CSS
import { Link, useNavigate } from 'react-router-dom';

const OfficerRegister = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    district: '',
    nic: '',
    designation: '',
    department: '',
    staffType: 'Officer',
    experience: '',
    previousEmployment: ''
  });

  const [activeTab, setActiveTab] = useState('admin');

  // Handle input changes and navigate to conductor page if selected
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'staffType' && value === 'Driver') {
      navigate('/driverregister');
    }
    if (name === 'staffType' && value === 'Conductor') {
      navigate('/conductorregister');
    }
    if (name === 'staffType' && value === 'Admin') {
      navigate('/adminregister');
    }
    if (name === 'staffType' && value === 'Officer') {
      navigate('/officerregister');
    }
  };

  const handleFileUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    setFormData({
      ...formData,
      licenseFile: file
    });
  }
};

  const handleRegister = () => {
    console.log('Registration data:', formData);
    alert('Driver registered successfully!');
  };

  const handleBack = () => {
    setFormData({
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      district: '',
      nic: '',
      designation: '',
      department: '',
      staffType: 'Officer',
      experience: '',
      previousEmployment: ''
    });
  };

  return (
    <div className="bus-container">
      <h1 className="bus-title">Smart Public Bus Management System</h1>

      {/* <div className="tab-container">
        <button
          className={`tab ${activeTab === 'admin' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('admin')}
        >
          Admin Dashboard
        </button>
        <button
          className={`tab ${activeTab === 'staff' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('staff')}
        >
          Staff Interface
        </button>
        <button
          className={`tab ${activeTab === 'passenger' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('passenger')}
        >
          Passenger Portal
        </button>
      </div> */}

      <div className="form-container">
        <div className="form-header">
          <h2 className="form-title">Register Staff</h2>
        </div>

        <div className="form-content">

          <div className="row">
            <div className="officer-form-group">
              <label className="officer-label">Staff Type:</label>
              <select
                name="staffType"
                value={formData.staffType}
                onChange={handleChange}
              >
                <option>Driver</option>
                <option>Conductor</option>
                <option>Admin</option>
                <option>Officer</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="officer-form-group">
              <label className="officer-label">Full Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="officer-form-group">
              <label className="officer-label">&nbsp;</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="officer-form-group">
              <label className="officer-label">Mobile Number:</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="officer-form-group">
              <label className="officer-label">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="officer-form-group">
              <label className="officer-label">Address:</label>
              <input
                type="text"
                name="addressLine1"
                placeholder="Line 1"
                value={formData.addressLine1}
                onChange={handleChange}
              />
            </div>
            <div className="officer-form-group">
              <label className="officer-label">&nbsp;</label>
              <input
                type="text"
                name="addressLine2"
                placeholder="Line 2"
                value={formData.addressLine2}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="officer-form-group">
              <label className="officer-label">District: </label>
              <input
                type="text"
                name="district"
                placeholder="District"
                value={formData.district}
                onChange={handleChange}
              />
            </div>
            <div className="officer-form-group">
              <label className="officer-label">City: </label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.licenseExpiry}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="officer-form-group">
              <label className="officer-label">NIC: </label>
              <input
                type="text"
                name="nic"
                placeholder="NIC"
                value={formData.nic}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="officer-form-group">
              <label className="officer-label">Designation: </label>
              <select
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              >
                <option>System Admin</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="officer-form-group">
              <label className="officer-label">Department: </label>
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="officer-form-group">
              <label className="officer-label">How Many Years of Experience:</label>
              <input
                type="text"
                name="experience"
                placeholder="Number"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
          </div>


          <div className="button-container">
            <button className="back-button" onClick={()=>navigate("/admindashboard")}>
              Back
            </button>
            <button className="register-button" onClick={()=>navigate("/admindashboard")}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerRegister;
