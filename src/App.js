import logo from './logo.svg';
import AdminDashboard from './pages/AdminDashboard';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DriverRegister from './pages/staffregister/DriverRegister';
import ConductorRegister from './pages/staffregister/ConductorRegister';
import AdminRegister from './pages/staffregister/AdminRegister';
import OfficerRegister from './pages/staffregister/OfficerRegister';
import PassengerRegister from './pages/PassengerRegister';
import PassengerDashboard from './pages/PassengerDashboard';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/driverregister" element={<DriverRegister />} />
        <Route path="/conductorregister" element={<ConductorRegister />} />
        <Route path="/adminregister" element={<AdminRegister/>} />
        <Route path="/officerregister" element={<OfficerRegister/>} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/passengerregister" element={<PassengerRegister />} />
        <Route path="/passengerdashboard" element={<PassengerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
