import React from 'react';
import { Link } from 'react-router-dom';
import './manageflights.css';

 // Import the CSS file for styling

const ManageFlights = () => {
  return (
    <div className="manage-flights-container">
      <div className="manage-flights-box">
        <div className="d-flex justify-content-center">
          <h3>Booking List</h3>
        </div>
        <Link to="/dashboard/booktickets" className="btn btn-success mt-3">
          Book Ticket
        </Link>
        <div className="mt-3">
          
        </div>
      </div>
    </div>
  );
};

export default ManageFlights; // Ensure the component name is consistent with the import

       