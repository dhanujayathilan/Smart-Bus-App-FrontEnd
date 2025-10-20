import React, { useState } from 'react';
import './Book_Seat.css';

const BookingSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [activeTab, setActiveTab] = useState('passenger');

  // Seat configuration
  const seatLayout = [
    // Row 1
    [{ id: 'driver', type: 'driver' }, { id: '1', status: 'counter' }, { id: '2', status: 'available' }, { id: '3', status: 'available' }, { id: '4', status: 'available' }, { id: '5', status: 'available' }, { id: '6', status: 'available' }, { id: '7', status: 'available' }, { id: '8', status: 'available' }, { id: '9', status: 'booked' }, { id: '10', status: 'booked' }],
    // Row 2
    [null, { id: '11', status: 'booked' }, { id: '12', status: 'available' }, { id: '13', status: 'available' }, { id: '14', status: 'available' }, { id: '15', status: 'available' }, { id: '16', status: 'available' }, { id: '17', status: 'available' }, { id: '18', status: 'available' }, { id: '19', status: 'booked' }, { id: '20', status: 'booked' }],
    // Row 3
    [null, { id: '21', status: 'booked' }, { id: '22', status: 'available' }, { id: '23', status: 'available' }, { id: '24', status: 'available' }, { id: '25', status: 'available' }, { id: '26', status: 'available' }, { id: '27', status: 'available' }, { id: '28', status: 'available' }, { id: '29', status: 'available' }, { id: '30', status: 'booked' }],
    // Row 4
    [null, null, null, null, null, null, null, null, null, null, { id: '31', status: 'booked' }],
    // Row 5
    [null, { id: '32', status: 'booked' }, { id: '33', status: 'booked' }, { id: '34', status: 'available' }, { id: '35', status: 'available' }, { id: '36', status: 'available' }, { id: '37', status: 'available' }, { id: '38', status: 'available' }, { id: '39', status: 'available' }, null, { id: '40', status: 'booked' }],
    // Row 6
    [null, { id: '41', status: 'booked' }, { id: '42', status: 'booked' }, { id: '43', status: 'available' }, { id: '44', status: 'available' }, { id: '45', status: 'available' }, { id: '46', status: 'available' }, { id: '47', status: 'available' }, { id: '48', status: 'available' }, null, { id: '49', status: 'booked' }]
  ];

  const handleSeatClick = (seatId, status) => {
    if (status === 'booked' || status === 'counter') return;
    
    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(id => id !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  const getSeatClass = (seat) => {
    if (!seat) return '';
    if (seat.type === 'driver') return 'seat driver-seat';
    if (selectedSeats.includes(seat.id)) return 'seat selected-seat';
    return `seat ${seat.status}-seat`;
  };

  return (
    <div className="bus-system-container2">
      
      <div className="ali">
      <h1 className="dashboard-title">Smart Public Bus Management System</h1>

      <div className="tabs">
        <button className="tab">Admin Dashboard</button>
        <button className="tab">Staff Interface</button>
        <button className="tab active">Passenger Portal</button>
      </div></div>
      
      <div className="content">
        <div className="book-seats-header">
          <span className="bus-icon">🚌</span> Book Seats
        </div>

        <div className="bus-info-card">
          <div className="bus-image-section">
            <div className="route-badge">Route: 02</div>
            <div className="bus-images">
              <img src="https://images.unsplash.com/photo-1570125909232-eb263e5ca20c?w=150&h=100&fit=crop" alt="Bus" className="bus-img" />
              <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=150&h=100&fit=crop" alt="Bus" className="bus-img" />
            </div>
          </div>

          <div className="info-divider"></div>

          <div className="info-section">
            <div className="info-label">Departure</div>
            <div className="info-value">GALLE</div>
            <div className="info-subtext">Date</div>
            <div className="info-subvalue">2025-09-22</div>
            <div className="info-subtext">Time</div>
            <div className="info-subvalue">08:30</div>
          </div>

          <div className="info-divider"></div>

          <div className="info-section">
            <div className="info-label">Departure</div>
            <div className="info-value">COLOMBO</div>
            <div className="info-subtext">Date</div>
            <div className="info-subvalue">2025-09-22</div>
            <div className="info-subtext">Time</div>
            <div className="info-subvalue">13:30</div>
          </div>

          <div className="info-divider"></div>

          <div className="info-section">
            <div className="info-label">Bus Type</div>
            <div className="info-value">Normal</div>
            <div className="info-subtext">Depot Name</div>
            <div className="info-subvalue">Colombo</div>
          </div>

          <div className="info-divider"></div>

          <div className="info-section">
            <div className="info-label">Model</div>
            <div className="info-value">Ashok Leyland</div>
            <div className="info-subtext">Schedule ID</div>
            <div className="info-subvalue">GC11-19900</div>
          </div>

          <div className="info-divider"></div>

          <div className="price-section">
            <div className="price-label">Rs.</div>
            <div className="price-value">250</div>
            <div className="seats-label">Available Seats</div>
            <div className="seats-value">27</div>
            <button className="hide-chart-btn">Hide Seat Chart</button>
          </div>
        </div>

        <div className="seat-selection-area">
          <div className="legend">
            <div className="legend-item">
              <div className="legend-box available"></div>
              <span>Available Seats</span>
            </div>
            <div className="legend-item">
              <div className="legend-box processing"></div>
              <span>Processing Seats</span>
            </div>
            <div className="legend-item">
              <div className="legend-box counter"></div>
              <span>Counter Seats</span>
            </div>
            <div className="legend-item">
              <div className="legend-box booked"></div>
              <span>Booked Seats</span>
            </div>
          </div>

          <div className="bus-layout">
            {seatLayout.map((row, rowIndex) => (
              <div key={rowIndex} className="seat-row">
                {row.map((seat, seatIndex) => (
                  seat ? (
                    <div
                      key={seatIndex}
                      className={getSeatClass(seat)}
                      onClick={() => seat.type !== 'driver' && handleSeatClick(seat.id, seat.status)}
                    >
                      {seat.type === 'driver' ? '🚗' : seat.id}
                    </div>
                  ) : (
                    <div key={seatIndex} className="seat empty-seat"></div>
                  )
                ))}
              </div>
            ))}
          </div>

          <button className="proceed-btn">Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default BookingSeat;