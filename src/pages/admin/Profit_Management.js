import React, { useState } from 'react';
import './profit_management.css';
import { Link, useNavigate } from 'react-router-dom';

const AdminProfitManagement = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('09/25/2025');
  const [selectedBus, setSelectedBus] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');
  const [totalCollection, setTotalCollection] = useState('');
  const [fuelExpenses, setFuelExpenses] = useState('');
  const [otherExpenses, setOtherExpenses] = useState('');

  const handleSubmit = () => {
    console.log('Collection entry added', {
      selectedDate,
      selectedBus,
      selectedRoute,
      totalCollection,
      fuelExpenses,
      otherExpenses
    });
    // Add your submission logic here
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Smart Public Bus Management System</h1>

      {/* Navigation Tabs */}
      <div className="tabs">
        <button className="tab active">Admin Dashboard</button>
        <button className="tab">Staff Dashboard</button>
        <button className="tab">Passenger Portal</button>
      </div>

      {/* Profit Management Bar */}
      <div className="profit-bar">
        <span className="profit-label">Profit Management</span>
        <button className="back-btn" onClick={()=>navigate("/admindashboard")}>Back to Dashboard</button>
      </div>

      <div className="main-content">
        {/* Left Column */}
        <div className="left-column">
          {/* Profit Overview */}
          <div className="card1">
            <div className="card-header">
              <span className="icon">💰</span>
              <h2>Profit Overview</h2>
            </div>
            <div className="profit-cards">
              <div className="profit-card pink">
                <h3>Rs9.4M</h3>
                <p>Monthly Profit</p>
                <span className="trend">+8.2% from last month</span>
              </div>
              <div className="profit-card cyan">
                <h3>Rs98.1M</h3>
                <p>Annual Profit</p>
                <span className="trend">+12.5% from last year</span>
              </div>
            </div>
            <div className="metrics">
              <div className="metric-item">
                <div className="metric-icon">📊</div>
                <div className="metric-value">18.2%</div>
                <div className="metric-label">Profit Margin</div>
              </div>
              <div className="metric-item">
                <div className="metric-icon">💵</div>
                <div className="metric-value">Rs2.8M</div>
                <div className="metric-label">Monthly Revenue</div>
              </div>
              <div className="metric-item">
                <div className="metric-icon">📈</div>
                <div className="metric-value">+12%</div>
                <div className="metric-label">Growth Rate</div>
              </div>
            </div>
          </div>

          {/* Monthly Profit Trend */}
          <div className="card1">
            <div className="card-header">
              <span className="icon">📊</span>
              <h2>Monthly Profit Trend</h2>
            </div>
            <div className="chart-placeholder">
              <p>Interactive Line Chart - Monthly Profit vs Revenue vs Expenses</p>
            </div>
          </div>

          {/* Daily Collection by Bus */}
          <div className="card1">
            <div className="card-header">
              <span className="icon">🚌</span>
              <h2>Daily Collection by Bus</h2>
            </div>
            <div className="bus-collection-grid">
              <div className="bus-card blue">
                <h4>Bus NA-1234</h4>
                <p className="route">Route 1 (A to B) • Active</p>
                <p className="passengers">Passengers: 145 | Total: 3,890</p>
                <div className="collection-amount">Rs15,750</div>
              </div>
              <div className="bus-card purple">
                <h4>Bus NA-5678</h4>
                <p className="route">Route 2 (C to D) • Idle</p>
                <p className="passengers">Passengers: 98 | Total: 2,450</p>
                <div className="collection-amount">Rs12,420</div>
              </div>
              <div className="bus-card indigo">
                <h4>Bus WP-9012</h4>
                <p className="route">Route 3 (E to F) • Maintenance</p>
                <p className="passengers">Passengers: 120 | Total: 3,200</p>
                <div className="collection-amount">Rs16,650</div>
              </div>
              <div className="bus-card violet">
                <h4>Bus CP-3456</h4>
                <p className="route">Route 4 (G to H) • Active</p>
                <p className="passengers">Passengers: 87 | Total: 2,100</p>
                <div className="collection-amount">Rs9,830</div>
              </div>
            </div>
          </div>

          {/* Annual Profit Analysis */}
          <div className="card1">
            <div className="card-header">
              <span className="icon">📈</span>
              <h2>Annual Profit Analysis</h2>
            </div>
            <div className="chart-placeholder">
              <p>Interactive Bar Chart - Annual Profit Comparison (2023-2025)</p>
            </div>
          </div>

          {/* Generate Reports */}
          <div className="card1">
            <div className="card-header">
              <span className="icon">📄</span>
              <h2>Generate Reports</h2>
            </div>
            <p className="report-desc">Generate detailed financial reports for analysis and regulatory compliance</p>
            <div className="report-buttons">
              <button className="report-btn green">Monthly Profit Report</button>
              <button className="report-btn green">Annual Financial Report</button>
              <button className="report-btn dark">Expense Analysis</button>
              <button className="report-btn dark">Bus-By-Route Report</button>
              <button className="report-btn dark">Tax Report</button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Daily Collection Input */}
          <div className="card1">
            <div className="card-header">
              <span className="icon">📅</span>
              <h2>Daily Collection Input</h2>
            </div>
            <div className="collection-form">
              <div className="form-group">
                <label>Date</label>
                <div className="input-wrapper">
                  <input 
                    type="text" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    placeholder="09/25/2025"
                  />
                  <span className="calendar-icon">📅</span>
                </div>
              </div>
              
              <div className="form-group">
                <label>Bus Number</label>
                <select 
                  value={selectedBus}
                  onChange={(e) => setSelectedBus(e.target.value)}
                >
                  <option value="">Select Bus</option>
                  <option value="NA-1234">NA-1234</option>
                  <option value="NA-5678">NA-5678</option>
                  <option value="WP-9012">WP-9012</option>
                  <option value="CP-3456">CP-3456</option>
                </select>
              </div>

              <div className="form-group">
                <label>Route</label>
                <select 
                  value={selectedRoute}
                  onChange={(e) => setSelectedRoute(e.target.value)}
                >
                  <option value="">Select Route</option>
                  <option value="1">Route 1 (A to B)</option>
                  <option value="2">Route 2 (C to D)</option>
                  <option value="3">Route 3 (E to F)</option>
                  <option value="4">Route 4 (G to H)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Total Collection (Rs)</label>
                <input 
                  type="text" 
                  value={totalCollection}
                  onChange={(e) => setTotalCollection(e.target.value)}
                  placeholder="Enter amount"
                />
              </div>

              <div className="form-group">
                <label>Fuel Expenses (Rs)</label>
                <input 
                  type="text" 
                  value={fuelExpenses}
                  onChange={(e) => setFuelExpenses(e.target.value)}
                  placeholder="Enter fuel expenses"
                />
              </div>

              <div className="form-group">
                <label>Other Expenses (Rs)</label>
                <input 
                  type="text" 
                  value={otherExpenses}
                  onChange={(e) => setOtherExpenses(e.target.value)}
                  placeholder="Maintenance, tolls, etc."
                />
              </div>

              <button onClick={handleSubmit} className="submit-btn">
                + Add Collection Entry
              </button>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="card1">
            <div className="card-header">
              <span className="icon">💰</span>
              <h2>Expense Breakdown</h2>
            </div>
            <div className="expense-list">
              <div className="expense-item">
                <div className="expense-info">
                  <span className="expense-icon fuel">⛽</span>
                  <span className="expense-name">Fuel Costs</span>
                </div>
                <span className="expense-amount">Rs2.2M</span>
              </div>
              <div className="expense-item">
                <div className="expense-info">
                  <span className="expense-icon maintenance">🔧</span>
                  <span className="expense-name">Maintenance</span>
                </div>
                <span className="expense-amount">Rs850K</span>
              </div>
              <div className="expense-item">
                <div className="expense-info">
                  <span className="expense-icon driver">👨‍✈️</span>
                  <span className="expense-name">Driver Salaries</span>
                </div>
                <span className="expense-amount">Rs1.5M</span>
              </div>
              <div className="expense-item">
                <div className="expense-info">
                  <span className="expense-icon road">🛣️</span>
                  <span className="expense-name">Road Taxes</span>
                </div>
                <span className="expense-amount">Rs450K</span>
              </div>
              <div className="expense-item">
                <div className="expense-info">
                  <span className="expense-icon insurance">🛡️</span>
                  <span className="expense-name">Insurance</span>
                </div>
                <span className="expense-amount">Rs320K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfitManagement;