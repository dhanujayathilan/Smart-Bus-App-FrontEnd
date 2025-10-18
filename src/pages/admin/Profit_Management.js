import React, { useState } from "react";
import "./profit_management.css";

const AdminProfitManagement = () => {
  const [collectionData, setCollectionData] = useState({
    date: "",
    busNumber: "",
    route: "",
    totalCollection: "",
    fuelExpense: "",
    otherExpenses: "",
  });

  const handleChange = (e) => {
    setCollectionData({ ...collectionData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Collection Data:", collectionData);
    alert("Collection data saved!");
  };

  return (
    <div className="dashboard-container3">
      <h1>Smart Public Bus Management System</h1>
      
      <div className="tabs">
        <button className="tab active">Admin Dashboard</button>
        <button className="tab">Staff Interface</button>
        <button className="tab">Passenger Portal</button>
      </div>

      <div className="section-header">
        <h2>Profit Management</h2>
        <button className="back-btn">Back to Dashboard</button>
      </div>

      {/* Profit Overview */}
      <div className="profit-overview">
        <div className="profit-card monthly">
          <h3>Rs9.4M</h3>
          <p>Monthly Profit</p>
          <span>+15.2% from last month</span>
        </div>
        <div className="profit-card annual">
          <h3>Rs98.1M</h3>
          <p>Annual Profit</p>
          <span>+22.8% from last year</span>
        </div>
        <div className="profit-stats">
          <div>Profit Margin: 18.5%</div>
          <div>Weekly Revenue: Rs2.8M</div>
          <div>Growth Rate: +12%</div>
        </div>
      </div>

      {/* Daily Collection Input */}
      <div className="daily-collection">
        <h3>Daily Collection Input</h3>
        <input type="date" name="date" onChange={handleChange} />
        <select name="busNumber" onChange={handleChange}>
          <option value="">Select Bus</option>
          <option value="Bus NA-1234">Bus NA-1234</option>
          <option value="Bus NA-5678">Bus NA-5678</option>
        </select>
        <select name="route" onChange={handleChange}>
          <option value="">Select Route</option>
          <option value="Route 101">Route 101</option>
          <option value="Route 245">Route 245</option>
        </select>
        <input
          type="number"
          name="totalCollection"
          placeholder="Total Collection (Rs)"
          onChange={handleChange}
        />
        <input
          type="number"
          name="fuelExpense"
          placeholder="Fuel Expense (Rs)"
          onChange={handleChange}
        />
        <input
          type="text"
          name="otherExpenses"
          placeholder="Other Expenses"
          onChange={handleChange}
        />
        <button onClick={handleSave}>Save Collection Data</button>
      </div>

      {/* Placeholder Sections */}
      <div className="charts">
        <div className="chart">Monthly Profit Trend</div>
        <div className="chart">Annual Profit Analysis</div>
      </div>

      <div className="expense-breakdown">
        <h3>Expense Breakdown</h3>
        <ul>
          <li>Fuel Costs: Rs3.2M</li>
          <li>Maintenance: Rs900K</li>
          <li>Driver Salaries: Rs1.8M</li>
          <li>Road Taxes: Rs450K</li>
          <li>Insurance: Rs320K</li>
        </ul>
      </div>

      <div className="daily-bus-collection">
        <h3>Daily Collection by Bus</h3>
        <div className="bus-card">Bus NA-1234: Rs15,750</div>
        <div className="bus-card">Bus NA-5678: Rs12,420</div>
        <div className="bus-card">Bus WP-9012: Rs18,650</div>
        <div className="bus-card">Bus CP-3456: Rs9,830</div>
      </div>

      <div className="generate-reports">
        <h3>Generate Reports</h3>
        <button>Monthly Profit Report</button>
        <button>Annual Financial Report</button>
        <button>Expense Analysis</button>
        <button>Bus Performance Report</button>
        <button>Tax Report</button>
      </div>
    </div>
  );
};

export default AdminProfitManagement;