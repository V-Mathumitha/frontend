import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  if (!bookingDetails) {
    return (
      <div className="container mt-5">
        <h3>No booking details available. Please book a ticket first.</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/dashboard/booktickets')}>
          Book Tickets
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Booking Details</h2>
      <div className="card p-3">
        <p><strong>Name:</strong> {BookingDetails.name}</p>
        <p><strong>Departure:</strong> {bookingDetails.departure}</p>
        <p><strong>Arrival:</strong> {bookingDetails.arrival}</p>
        <p><strong>Departure Date:</strong> {bookingDetails.departuredate}</p>
        <p><strong>Return Date:</strong> {bookingDetails.returndate ? bookingDetails.returndate : 'N/A'}</p>
        <p><strong>Passenger:</strong> {bookingDetails.passenger}</p>
        <p><strong>Trip Type:</strong> {bookingDetails.tripType}</p>
        <p><strong>Categories:</strong> {bookingDetails.categories}</p>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={() => navigate('/dashboard/booktickets')}>
          Book Another Ticket
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;

      