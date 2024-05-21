import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './dashboard.css'; // Import the CSS file

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/dashboard" className="brand-name">AirFlight</Link>
                </div>
                <ul className="navbar-links">
                    <li>
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="manageflights" className="nav-link">Manage Flights</Link>
                    </li>
                    <li>
                        <Link to="hotels" className="nav-link">Hotels</Link>
                    </li>
                    <li>
                        <Link to="holiday" className="nav-link">Holidays</Link>
                    </li>
                    <li>
                        <Link to="aboutus" className="nav-link">About Us</Link>
                    </li>
                </ul>
            </nav>
            
            <Outlet /> {/* Render child routes */}
            
        </div> 
    );
};

export default Dashboard;

