import React, { useState } from "react";
import "./passengerdashboard.css";
import { FaSearch, FaTicketAlt, FaBus, FaUser, FaPencilAlt } from "react-icons/fa";

const PassengerPortal = () => {
  // simple local state for demo interactions
  const [findQuery, setFindQuery] = useState("");
  const [bookRoute, setBookRoute] = useState("Route A");
  const [numSeats, setNumSeats] = useState(1);
  const [liveStop, setLiveStop] = useState("");
  const [message, setMessage] = useState(null);
  const [profileEdit, setProfileEdit] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dilshan Perera",
    email: "dilshan@example.com",
    phone: "+94 77 123 4567",
    memberSince: "2023-06-12",
  });

  // demo data for booking select
  const routes = ["Route A", "Route B", "Route C", "Express 1"];

  const handleFind = (e) => {
    e.preventDefault();
    const text = findQuery.trim() ? `Searching buses for "${findQuery}"...` : "Please enter a search term.";
    setMessage(text);
    // emulate action
    console.log("FindBus:", findQuery);
    setTimeout(() => setMessage(null), 3500);
  };

  const handleBook = (e) => {
    e.preventDefault();
    setMessage(`Booking ${numSeats} seat(s) on ${bookRoute} — (demo)`);
    console.log("BookTicket:", { bookRoute, numSeats });
    setTimeout(() => setMessage(null), 3500);
  };

  const handleLive = (e) => {
    e.preventDefault();
    if (!liveStop.trim()) {
      setMessage("Enter stop or bus ID to start live tracking.");
    } else {
      setMessage(`Starting live tracking for "${liveStop}"...`);
    }
    setTimeout(() => setMessage(null), 3500);
  };

  const toggleProfileEdit = () => {
    setProfileEdit(!profileEdit);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((p) => ({ ...p, [name]: value }));
  };

  const saveProfile = (e) => {
    e.preventDefault();
    setProfileEdit(false);
    setMessage("Profile saved (demo).");
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="pp-container">
      <header className="pp-header">
        <h1>Passenger Portal</h1>
        <p className="pp-sub">Find buses, book tickets and track live — demo interface</p>
      </header>

      <main className="pp-grid">
        {/* Find Bus */}
        <section className="pp-card pp-card-find">
          <div className="pp-card-header">
            <div className="pp-icon-wrap"><FaSearch size={20} /></div>
            <h2>Find Bus</h2>
          </div>
          <form className="pp-form" onSubmit={handleFind}>
            <label className="pp-label">From / To</label>
            <input
              className="pp-input"
              placeholder="Type city / stop (e.g. Colombo → Kandy)"
              value={findQuery}
              onChange={(e) => setFindQuery(e.target.value)}
            />
            <div className="pp-row">
              <button type="submit" className="pp-btn pp-btn-primary">Search</button>
              <button
                type="button"
                className="pp-btn pp-btn-ghost"
                onClick={() => { setFindQuery(""); setMessage("Search cleared."); setTimeout(()=>setMessage(null),1500); }}
              >
                Clear
              </button>
            </div>
          </form>
        </section>

        {/* Book Ticket */}
        <section className="pp-card pp-card-book">
          <div className="pp-card-header">
            <div className="pp-icon-wrap"><FaTicketAlt size={20} /></div>
            <h2>Book Ticket</h2>
          </div>
          <form className="pp-form" onSubmit={handleBook}>
            <label className="pp-label">Choose Route</label>
            <select className="pp-input" value={bookRoute} onChange={(e) => setBookRoute(e.target.value)}>
              {routes.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>

            <label className="pp-label">Seats</label>
            <input
              className="pp-input"
              type="number"
              min="1"
              max="10"
              value={numSeats}
              onChange={(e) => setNumSeats(Number(e.target.value))}
            />

            <div className="pp-row">
              <button className="pp-btn pp-btn-primary" type="submit">Book</button>
              <button type="button" className="pp-btn pp-btn-ghost" onClick={() => { setNumSeats(1); setBookRoute(routes[0]); }}>
                Reset
              </button>
            </div>
          </form>
        </section>

        {/* Live Tracking */}
        <section className="pp-card pp-card-live">
          <div className="pp-card-header">
            <div className="pp-icon-wrap"><FaBus size={20} /></div>
            <h2>Live Tracking</h2>
          </div>
          <form className="pp-form" onSubmit={handleLive}>
            <label className="pp-label">Stop / Bus ID</label>
            <input
              className="pp-input"
              placeholder="Enter stop name or bus id"
              value={liveStop}
              onChange={(e) => setLiveStop(e.target.value)}
            />

            <div className="pp-row">
              <button type="submit" className="pp-btn pp-btn-primary">Track</button>
              <button type="button" className="pp-btn pp-btn-ghost" onClick={() => setLiveStop("")}>Clear</button>
            </div>

            <div className="pp-muted" style={{ marginTop: 8 }}>
              Tip: Use a bus ID or nearby stop name for better results.
            </div>
          </form>
        </section>

        {/* Profile — full width */}
        <section className="pp-card pp-card-profile full-width">
          <div className="profile-top">
            <div className="avatar">
              <div className="avatar-circle">DP</div>
              <div className="profile-info">
                <h3>{profile.name}</h3>
                <div className="pp-muted">{profile.email} • {profile.phone}</div>
              </div>
            </div>

            <div className="profile-actions">
              <button className="pp-icon-btn" onClick={toggleProfileEdit} title="Edit profile">
                <FaPencilAlt />
              </button>
            </div>
          </div>

          {!profileEdit && (
            <div className="profile-body">
              <div className="profile-row">
                <div><strong>Member since</strong></div>
                <div>{profile.memberSince}</div>
              </div>
              <div className="profile-row">
                <div><strong>Saved routes</strong></div>
                <div>Colombo → Kandy, Negombo → Colombo</div>
              </div>
              <div className="profile-row">
                <div><strong>Notifications</strong></div>
                <div>Email: Enabled • SMS: Enabled</div>
              </div>
            </div>
          )}

          {profileEdit && (
            <form className="profile-edit" onSubmit={saveProfile}>
              <div className="profile-edit-grid">
                <label>
                  Name
                  <input name="name" value={profile.name} onChange={handleProfileChange} />
                </label>
                <label>
                  Email
                  <input name="email" value={profile.email} onChange={handleProfileChange} />
                </label>
                <label>
                  Phone
                  <input name="phone" value={profile.phone} onChange={handleProfileChange} />
                </label>
              </div>

              <div className="pp-row" style={{ marginTop: 12 }}>
                <button className="pp-btn pp-btn-primary" type="submit">Save</button>
                <button type="button" className="pp-btn pp-btn-ghost" onClick={() => setProfileEdit(false)}>Cancel</button>
              </div>
            </form>
          )}
        </section>
      </main>

      {/* simple message area */}
      {message && <div className="pp-toast">{message}</div>}

      <footer className="pp-footer">
        <div>© {new Date().getFullYear()} Passenger Portal — demo</div>
        <div className="pp-muted">Built with React + CSS Grid</div>
      </footer>
    </div>
  );
};

export default PassengerPortal;