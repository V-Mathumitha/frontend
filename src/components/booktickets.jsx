import React, { useState } from 'react';
import axios from 'axios';

const BookTickets = () => {
  const [tripType, setTripType] = useState('oneWay');
  const [formData, setFormData] = useState({
    name: '',
    departure: '',
    arrival: '',
    departuredate: '',
    returndate: '',
    passenger: '1',
    tripType: 'oneway',
    categories: 'family and friends',
  });
  const [bookingDetails, setBookingDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      const isValidName = /^[a-zA-Z ]+$/.test(value);
      if (!isValidName) {
        setError('Name should only contain letters and spaces.');
        return;
      }
    }

    

    setFormData({
      ...formData,
      [name]: value,
    });

    // Check if the return date is before the departure date
    if (name === 'departuredate' || name === 'returndate') {
      const { departuredate, returndate } = {
        ...formData,
        [name]: value,
      };
      if (departuredate && returndate && new Date(returndate) < new Date(departuredate)) {
        setError('Return date cannot be before the departure date.');
      } else {
        setError(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/booktickets', formData);
      console.log("Success: Ticket booked");
      console.log(response);
      setBookingDetails(response.data);
      console.log(bookingDetails);
      setError(null);
    } catch (error) {
      console.error('Error booking ticket:', error);
      setError("Failed to book ticket. Please try again.");
      setBookingDetails(null);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <div className='p-3 rounded border' style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className='text-center mb-4'>Book Tickets</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Name:</strong></label>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              className='form-control rounded-0'
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='departure'><strong>Departure:</strong></label>
            <input
              type='text'
              name='departure'
              placeholder='Departure City'
              className='form-control rounded-0'
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='arrival'><strong>Arrival:</strong></label>
            <input
              type='text'
              name='arrival'
              placeholder='Arrival City'
              className='form-control rounded-0'
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='departuredate'><strong>Departure Date:</strong></label>
            <input
              type='date'
              name='departuredate'
              className='form-control rounded-0'
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='returndate'><strong>Return Date:</strong></label>
            <input
              type='date'
              name='returndate'
              className='form-control rounded-0'
              onChange={handleChange}
              disabled={tripType === 'oneWay'}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='passenger'><strong>Passenger:</strong></label>
            <select
              name='passenger'
              className='form-control rounded-0'
              onChange={handleChange}
            >
              <option value='1'>1 Passenger</option>
              <option value='2'>2 Passengers</option>
              <option value='3'>3 Passengers</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className='mb-3'>
            <strong>Trip Type:</strong><br />
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='tripType'
                id='oneWay'
                value='oneWay'
                checked={tripType === 'oneWay'}
                onChange={() => setTripType('oneWay')}
              />
              <label className='form-check-label' htmlFor='oneWay'>One Way</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='tripType'
                id='roundTrip'
                value='roundTrip'
                checked={tripType === 'roundTrip'}
                onChange={() => setTripType('roundTrip')}
              />
              <label className='form-check-label' htmlFor='roundTrip'>Round Trip</label>
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='categories'><strong>Categories:</strong></label>
            <select
              name="categories"
              className='form-control-rounded-0'
              onChange={handleChange}
            >
              <option value='family and friends'>Family and Friends</option>
              <option value='senior citizen'>Senior Citizen</option>
              <option value='student'>Student</option>
              <option value='armed forces'>Armed Forces</option>
              <option value='govt officials'>Govt Officials</option>
            </select>
          </div>
          {/* Add more form fields for departure, arrival, date, etc. */}
          <div className='text-center mb-3'>
            <button className='btn btn-success w-100 rounded-0' type='submit'>
              Book Tickets
            </button>
          </div>
        </form>
        {error && <p className="text-danger">{error}</p>}
        {bookingDetails && (
          <div>
            <h3>Booking Details</h3>
            <p>Name: {bookingDetails.name}</p>
            <p>Departure: {bookingDetails.departure}</p>
            <p>Arrival: {bookingDetails.arrival}</p>
            <p>Departure Date: {bookingDetails.departuredate}</p>
            <p>Return Date: {bookingDetails.returndate}</p>
            <p>Passenger: {bookingDetails.passenger}</p>
            <p>Trip Type: {bookingDetails.tripType}</p>
            <p>Categories: {bookingDetails.categories}</p>
          </div>
        )}
        <p className='text-center'>Let's enjoy this holiday!</p>
      </div>
    </div>
  );
};

export default BookTickets;
 