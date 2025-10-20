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
import View_Analytics from './pages/admin/View_Analytics';
import Profit_Management from './pages/admin/Profit_Management';
import Add_Depot from './pages/admin/Add_Depot';

import Staff_Dashboard from './pages/staff/Staff_Dashboard';
import Edit_Staff_Profiles from './pages/staff/Edit_Staff_Profiles';
import Staff_Help_Support from './pages/staff/Staff_Help_Support';
import Staff_Feedback from './pages/staff/Staff_Feedback';

import Edit_Admin_Profile from './pages/staff/Edit_Admin_Profile';
import Edit_Officer_Profile from './pages/staff/Edit_Officer_Profile';
import Edit_Driver_Profile from './pages/staff/Edit_Driver_Profile';
import Edit_Conductor_Profile from './pages/staff/Edit_Conductor_Profile';

import Passenger_Edit_Profile from './pages/passenger/Passenger_Edit_Profile';
import Passenger_Feedback from './pages/passenger/Passenger_Feedback';
import Passenger_Help_Support from './pages/passenger/Passenger_Help_Support';
import Bus_Booking from './pages/passenger/Bus_Booking';
import Book_Seat from './pages/passenger/Book_Seat';

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
        <Route path="/view_analytics" element={<View_Analytics />} />
        <Route path="/profit_management" element={<Profit_Management />} />
        <Route path="/staff_dashboard" element={<Staff_Dashboard />} />
        <Route path="/add_depot" element={<Add_Depot />} />

        <Route path="/edit_staff_profile" element={<Edit_Staff_Profiles />} />
        <Route path="/staff_help_support" element={<Staff_Help_Support />} />
        <Route path="/staff_feedback" element={<Staff_Feedback />} />

        
        <Route path="/edit_admin_profile" element={<Edit_Admin_Profile />} />
        <Route path="/edit_officer_profile" element={<Edit_Officer_Profile />} />
        <Route path="/edit_driver_Profile" element={<Edit_Driver_Profile />} />
        <Route path="/edit_conductor_profile" element={<Edit_Conductor_Profile />} />
        
        <Route path="/passenger_edit_profile" element={<Passenger_Edit_Profile />} />
        <Route path="/passenger_feedback" element={<Passenger_Feedback />} />
        <Route path="/passenger_help_support" element={<Passenger_Help_Support />} />
        <Route path="/bus_booking" element={<Bus_Booking />} />
        <Route path="/book_seat" element={<Book_Seat />} />

      </Routes>
    </Router>
  );
}

export default App;
