import React, { useState } from 'react';
import './edit_driver_profile.css'; // Import external CSS
import { Link, useNavigate } from 'react-router-dom';

const DriverEditProfile = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    dob: '',
    staffType: 'Driver',
    gender: '',
    city: '',
    district: '',
    nic: '',
    licenseFile: null,
    licenseNumber: '',
    licenseExpiry: '',
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
      navigate('/edit_driver_Profile');
    }
    if (name === 'staffType' && value === 'Conductor') {
      navigate('/edit_conductor_profile');
    }
    if (name === 'staffType' && value === 'Admin') {
      navigate('/edit_admin_profile');
    }
    if (name === 'staffType' && value === 'Officer') {
      navigate('/edit_officer_profile');
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
      dob: '',
      staffType: 'Driver',
      gender: '',
      city: '',
      district: '',
      nic: '',
      licenseFile: null,
      licenseNumber: '',
      licenseExpiry: '',
      experience: '',
      previousEmployment: ''
    });
  };

  return (
    <div className="driver-container5">
      <h1 className="driver-title">Smart Public Bus Management System</h1>

      <div className="driver-form-container5">
        <div className="form-header5">
          <h2 className="form-title">Edit Profile</h2>
        </div>

        <div className="driver-form-content">

          <div className="driver-row">
            <div className="driver-form-group">
              <label className="driver-label">Staff Type:</label>
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

          <div className="driver-row">
            <div className="driver-form-group">
              <label className="driver-label">Full Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="driver-form-group">
              <label className="driver-label">&nbsp;</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="driver-row">
            <div className="driver-form-group">
              <label className="driver-label">Mobile Number:</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="driver-form-group">
              <label className="driver-label">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="driver-row">
            <div className="driver-form-group">
              <label className="driver-label">Address:</label>
              <input
                type="text"
                name="addressLine1"
                placeholder="Line 1"
                value={formData.addressLine1}
                onChange={handleChange}
              />
            </div>
            <div className="driver-form-group">
              <label className="driver-label">&nbsp;</label>
              <input
                type="text"
                name="addressLine2"
                placeholder="Line 2"
                value={formData.addressLine2}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="driver-row">
            <div className="driver-form-group">
              <label className="driver-label">Date of Birth:</label>
              <input
                type="text"
                name="dob"
                placeholder="MM-DD-YYYY"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="driver-row">
            <div className="driver-form-group">
              <label className="driver-label">Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div className="driver-row">
            <div className="driver-form-group">
              <label className="driver-label">District: </label>
              <input
                type="text"
                name="district"
                placeholder="District"
                value={formData.district}
                onChange={handleChange}
              />
            </div>
            <div className="driver-form-group">
              <label className="driver-label">City: </label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.licenseExpiry}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="driver-row">
            <div className="driver-form-group">
              <label className="driver-label">NIC: </label>
              <input
                type="text"
                name="nic"
                placeholder="NIC"
                value={formData.nic}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="driver-row">
            <div className="driver-form-group">
              <label className="driver-label">Driver's License Number:</label>
              <input
                type="text"
                name="licenseNumber"
                placeholder="Number"
                value={formData.licenseNumber}
                onChange={handleChange}
              />
            </div>
            <div className="driver-form-group">
              <label className="driver-label">Driver's License Expiration Date:</label>
              <input
                type="text"
                name="licenseExpiry"
                placeholder="MM-DD-YYYY"
                value={formData.licenseExpiry}
                onChange={handleChange}
              />
            </div>
          </div>

          
          <div className="button-container">
            <button className="back-button" onClick={()=>navigate("/staff_dashboard")}>
              Back
            </button>
            <button className="register-button" onClick={()=>navigate("/staff_dashboard")}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverEditProfile;
