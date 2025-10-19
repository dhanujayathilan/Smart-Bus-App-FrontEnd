import React, { useState } from 'react';
import './add_depot.css'; // Import external CSS
import { Link, useNavigate } from 'react-router-dom';

const AddDepot = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bus_number: '',
    d_name: '',
    to: '',
    from: '',
    bus_route: '',
    driver: '',
    conductor: '',
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
      bus_number: '',
      d_name: '',
      to: '',
      from: '',
      bus_route: '',
      driver: '',
      conductor: '',
    });
  };

  return (
    <div className="bus-container">
      <h1 className="bus-title">Smart Public Bus Management System</h1>

      {/* Navigation Tabs */}
      <div className="tabs1">
      <div className="tabs">
        <button className="tab active">Admin Dashboard</button>
        <button className="tab">Staff Interface</button>
        <button className="tab">Passenger Portal</button>
      </div></div>

      <div className="form-container-depot">
        <div className="form-header-depot">
          <h2 className="form-title">Add Depot</h2>
        </div>

        <div className="form-content-depot">

          <div className="row">
            <div className="form-group-depot">
              <label className="l-depot">Bus Number:</label>
              <select className="input-color-depot"
                name="bus_number"
                value={formData.bus_number}
                onChange={handleChange}
              >
                <option>ND-1433</option>
                <option>ND-6532</option>
              </select>
            </div>
            
          </div>

          <div className="row">
            <div className="form-group-depot">
              <label className="l-depot">Depot Name:</label>
              <select className="input-color-depot"
                name="d_name"
                value={formData.d_name}
                onChange={handleChange}
              >
                <option>Horana</option>
                <option>Ratnapura</option>
              </select>
            </div>
            
          </div>

          <div className="row">
            <div className="form-group-depot">
              <label className="l-depot">To:</label>
              <input className="input-color-depot"
                type="text"
                name="to"
                value={formData.to}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-depot">
              <label className="l-depot">From:</label>
              <input className="input-color-depot"
                type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group-depot">
              <label className="l-depot">Bus Route:</label>
              <select className="input-color-depot"
                name="bus_route"
                value={formData.bus_route}
                onChange={handleChange}
              >
                <option>120</option>
                <option>285</option>
              </select>
            </div>
          </div>

          <div className="button-container">
            <button className="back-button" onClick={()=>navigate("/admindashboard")}>
              Back
            </button>
            <button className="register-button">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepot;
