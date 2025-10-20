import React, { useState } from 'react';
import './Bus_Booking.css';
import { Link, useNavigate } from 'react-router-dom';

const BusBooking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    from: 'Galle',
    to: 'Colombo',
    travelDate: '2025-09-22',
    boardingPoint: 'Rathgama'
  });

  const busRoutes = [
    {
      id: 1,
      route: '02',
      departure: { location: 'GALLE', date: '2025-09-22', time: '08:30' },
      destination: { location: 'COLOMBO', date: '2025-09-22', time: '13:30' },
      busType: 'Normal',
      model: 'Ashok Leyland',
      depotName: 'Colombo',
      scheduleId: 'GC11-19000',
      price: 250,
      availableSeats: 39
    },
    {
      id: 2,
      route: '02',
      departure: { location: 'GALLE', date: '2025-09-22', time: '06:30' },
      destination: { location: 'COLOMBO', date: '2025-09-22', time: '09:00' },
      busType: 'AC',
      model: 'Sky-Line',
      depotName: 'Colombo',
      scheduleId: 'GC11-19800',
      price: 550,
      availableSeats: 19
    },
    {
      id: 3,
      route: '02',
      departure: { location: 'GALLE', date: '2025-09-22', time: '10:30' },
      destination: { location: 'COLOMBO', date: '2025-09-22', time: '15:30' },
      busType: 'Normal',
      model: 'Ashok Leyland',
      depotName: 'Colombo',
      scheduleId: 'GC11-19910',
      price: 295,
      availableSeats: 9
    },
    {
      id: 4,
      route: '02',
      departure: { location: 'GALLE', date: '2025-09-22', time: '17:30' },
      destination: { location: 'COLOMBO', date: '2025-09-22', time: '21:30' },
      busType: 'Normal',
      model: 'Ashok Leyland',
      depotName: 'Colombo',
      scheduleId: 'GC11-19922',
      price: 268,
      availableSeats: 17
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = () => {
    console.log('Searching buses...', formData);
  };

  const handleBookSeat = (busId) => {
    console.log('Booking seat for bus:', busId);
  };

  return (
    <div className="bus-booking-container">
        <div className="ali">
      <h1 className="dashboard-title">Smart Public Bus Management System</h1>

      <div className="tabs">
        <button className="tab">Admin Dashboard</button>
        <button className="tab">Staff Interface</button>
        <button className="tab active">Passenger Portal</button>
      </div></div>

      <div className="booking-section">
        <div className="section-title">🚌 Book Your Ticket</div>

        <div className="search-form">
          <div className="form-group">
            <label>FROM:</label>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>TO:</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Travel Date:</label>
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Boarding Point:</label>
            <input
              type="text"
              name="boardingPoint"
              value={formData.boardingPoint}
              onChange={handleInputChange}
            />
          </div>

          <button className="search-btn" onClick={handleSearch}>
            Search Buses
          </button>
        </div>

        <div className="bus-list">
          {busRoutes.map((bus) => (
            <div key={bus.id} className="bus-card">
              <div className="bus-header">
                <div className="route-badge">Route: {bus.route}</div>
              </div>

              <div className="bus-content">
                <div className="bus-image">
                  <img
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=200&h=150&fit=crop"
                    alt="Bus"
                  />
                </div>

                <div className="bus-details">
                  <div className="location-section">
                    <div className="location-info">
                      <div className="label">Departure</div>
                      <div className="location">{bus.departure.location}</div>
                      <div className="date-time">
                        <div>Date</div>
                        <div className="value">{bus.departure.date}</div>
                      </div>
                      <div className="date-time">
                        <div>Time</div>
                        <div className="time-value">{bus.departure.time}</div>
                      </div>
                    </div>

                    <div className="arrow">➔</div>

                    <div className="location-info">
                      <div className="label">Departure</div>
                      <div className="location">{bus.destination.location}</div>
                      <div className="date-time">
                        <div>Date</div>
                        <div className="value">{bus.destination.date}</div>
                      </div>
                      <div className="date-time">
                        <div>Time</div>
                        <div className="time-value">{bus.destination.time}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bus-info-grid">
                    <div className="info-item">
                      <div className="info-label">Bus Type</div>
                      <div className="info-value">{bus.busType}</div>
                    </div>
                    <div className="info-item">
                      <div className="info-label">Model</div>
                      <div className="info-value">{bus.model}</div>
                    </div>
                    <div className="info-item">
                      <div className="info-label">Depot Name</div>
                      <div className="info-value">{bus.depotName}</div>
                    </div>
                    <div className="info-item">
                      <div className="info-label">Schedule ID</div>
                      <div className="info-value">{bus.scheduleId}</div>
                    </div>
                  </div>
                </div>

                <div className="price-section">
                  <div className="price">
                    <div className="currency">Rs.</div>
                    <div className="amount">{bus.price}</div>
                  </div>
                  <div className="availability">
                    <div>Available</div>
                    <div>Seats</div>
                  </div>
                  <div className="seats-count">{bus.availableSeats}</div>
                  <button
                    className="book-btn"
                    onClick={()=>navigate("/book_seat")}
                    
                  >
                    Book Seat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusBooking;