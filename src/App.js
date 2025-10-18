import logo from './logo.svg';
import 'leaflet/dist/leaflet.css';
import AdminDashboard from './pages/admin/AdminDashboard';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DriverRegister from './pages/admin/staffregister/DriverRegister';
import ConductorRegister from './pages/admin/staffregister/ConductorRegister';
import AdminRegister from './pages/admin/staffregister/AdminRegister';
import OfficerRegister from './pages/admin/staffregister/OfficerRegister';
import PassengerRegister from './pages/passenger/PassengerRegister';
import PassengerDashboard from './pages/passenger/PassengerDashboard';
import View_Buses_on_Map from './pages/admin/View_Buses_on_Map';
import Route_and_Schedule from './pages/admin/Route_and_Schedule';
import Admin_Send_Alert from './pages/admin/Admin_Send_Alert';
import Profit_Management from './pages/admin/Profit_Management';
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
        <Route path="/view_buses_on_map" element={<View_Buses_on_Map />} />
        <Route path="/route_and_schedule" element={<Route_and_Schedule />} />
        <Route path="/admin_send_alert" element={<Admin_Send_Alert />} />
        <Route path="/profit_management" element={<Profit_Management />} />
      </Routes>
    </Router>
  );
}

export default App;
