import React, { useState } from 'react';
import './passenger_edit_profile.css'; // Import external CSS
import { Link, useNavigate } from 'react-router-dom';

const PassengerEditProfile = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    dob: '',
    gender:'',
    city: '',
    district: '',
    username: '',
    password: '',
    repassword: '',
  });

  const [activeTab, setActiveTab] = useState('admin');

  // Handle input changes and navigate to conductor page if selected
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleRegister = () => {
    console.log('Registration data:', formData);
    alert('Staff registered successfully!');
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
      gender:'',
      city: '',
      district: '',
      username: '',
      password: '',
      repassword: '',
    });
  };

  return (
    <div className="bus-container">
      <h1 className="bus-title">Smart Public Bus Management System</h1>

      

      <div className="form-container-p-register">
        <div className="form-header">
          <h2 className="form-title">Edit Profile</h2>
        </div>

        <div className="form-content-p-register">

          <div className="row">
            <div className="form-group-p-reg">
              <label className="l-p-register">Full Name:</label>
              <input className="input-color-p-reg"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-p-reg">
              <label className="l-p-register">&nbsp;</label>
              <input className="input-color-p-reg"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group-p-reg">
              <label className="l-p-register">Mobile Number:</label>
              <input className="input-color-p-reg"
                type="tel"
                name="mobile"
                placeholder="Number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-p-reg">
              <label className="l-p-register">Email:</label>
              <input className="input-color-p-reg"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group-p-reg">
              <label className="l-p-register">Address:</label>
              <input className="input-color-p-reg"
                type="text"
                name="addressLine1"
                placeholder="Line 1"
                value={formData.addressLine1}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-p-reg">
              <label className="l-p-register">&nbsp;</label>
              <input className="input-color-p-reg"
                type="text"
                name="addressLine2"
                placeholder="Line 2"
                value={formData.addressLine2}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group-p-reg">
              <label className="l-p-register">Date of Birth:</label>
              <input className="input-color-p-reg"
                type="text"
                name="dob"
                placeholder="MM-DD-YYYY"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group-p-reg">
              <label className="l-p-register">Gender:</label>
              <select className="input-color-p-reg"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="form-group-p-reg">
              <label className="l-p-register">District: </label>
              <input className="input-color-p-reg"
                type="text"
                name="district"
                placeholder="District"
                value={formData.district}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-p-reg">
              <label className="l-p-register">City: </label>
              <input className="input-color-p-reg"
                type="text"
                name="city"
                placeholder="City"
                value={formData.licenseExpiry}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group-p-reg">
              <label className="l-p-register">Username: </label>
              <input className="input-color-p-reg"
                type="text"
                name="username"
                placeholder="Username"
                value={formData.nic}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group-p-reg">
              <label className="l-p-register">Password: </label>
              <input className="input-color-p-reg"
                type="text"
                name="password"
                placeholder="Enter Password"
                value={formData.nic}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group-p-reg">
              <label className="l-p-register">Re-Password: </label>
              <input className="input-color-p-reg"
                type="text"
                name="repassword"
                placeholder="Re-Enter Password"
                value={formData.nic}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="button-container">
            <button className="back-button" onClick={()=>navigate("/passengerdashboard")}>
              Back
            </button>
            <button className="register-button" onClick={()=>navigate("/passengerdashboard")}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerEditProfile;
