import logo from './logo.svg';
import AdminDashboard from './pages/AdminDashboard';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DriverRegister from './pages/staffregister/DriverRegister';
import ConductorRegister from './pages/staffregister/ConductorRegister';
import AdminRegiter from './pages/staffregister/AdminRegister';
import OfficerRegister from './pages/staffregister/OfficerRegister';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/driverregister" element={<DriverRegister />} />
        <Route path="/conductorregister" element={<ConductorRegister />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/adminregister" element={<AdminRegiter/>} />
        <Route path="/officerregister" element={<OfficerRegister/>} />
      </Routes>
    </Router>
  );
}

export default App;
