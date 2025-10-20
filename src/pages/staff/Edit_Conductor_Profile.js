import React, { useState } from 'react';
import './edit_conductor_profile.css'; // Import external CSS
import { Link, useNavigate } from 'react-router-dom';

const ConductorEditProfile = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    dob: '',
    staffType: 'Conductor',
    gender:'',
    city: '',
    district: '',
    nic: '',
    nicFile: null,
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
      staffType: 'Conductor',
      gender:'',
      city: '',
      district: '',
      nic: '',
      nicFile: null,
      experience: '',
      previousEmployment: ''
    });
  };

  return (
    <div className="bus-containers">
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

      <div className="form-container-edit">
        <div className="form-headeredit">
          <h2 className="form-title">Edit Profile</h2>
        </div>

        <div className="form-content-edit">

          <div className="row">
            <div className="conductor-edit-form-group">
              <label className="conductor-edit-label">Staff Type:</label>
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
            <div className="conductor-edit-form-group">
              <label className="conductor-edit-label">Full Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="conductor-edit-form-group">
              <label className="conductor-edit-label">&nbsp;</label>
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
            <div className="conductor-edit-form-group">
              <label className="conductor-edit-label">Mobile Number:</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="conductor-edit-form-group">
              <label className="conductor-edit-label">Email:</label>
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
            <div className="conductor-edit-form-group">
              <label className="conductor-edit-label">Address:</label>
              <input
                type="text"
                name="addressLine1"
                placeholder="Line 1"
                value={formData.addressLine1}
                onChange={handleChange}
              />
            </div>
            <div className="conductor-edit-form-group">
              <label className="conductor-edit-label">&nbsp;</label>
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
            <div className="conductor-edit-form-group">
              <label className="conductor-edit-label">Date of Birth:</label>
              <input
                type="text"
                name="dob"
                placeholder="MM-DD-YYYY"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="conductor-edit-form-group">
              <label className="conductor-edit-label">Gender:</label>
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

          <div className="row">
            <div className="conductor-edit-form-group">
              <label className="conductor-edit-label">District: </label>
              <input
                type="text"
                name="district"
                placeholder="District"
                value={formData.district}
                onChange={handleChange}
              />
            </div>
            <div className="conductor-edit-form-group">
              <label className="conductor-edit-label">City: </label>
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
            <div className="conductor-edit-form-group">
              <label className="conductor-edit-label">NIC: </label>
              <input
                type="text"
                name="nic"
                placeholder="NIC"
                value={formData.nic}
                onChange={handleChange}
              />
            </div>
          </div>

          

          <div className="button-container">
            <button className="back-button" onClick={()=>navigate("/staff_dashboard")}>
              Back
            </button>
            <button className="register-button" onClick={()=>navigate("/staff_dashboard")}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConductorEditProfile;
