import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Home from './components/home';
import BookTickets from './components/booktickets';
import ManageFlights from './components/manageflights';
import About from './components/aboutus';
import Holiday from './components/holiday';
import Hotels  from './components/hotels';
import BookingDetails from './components/bookingdetails';

 // Import BookedTickets component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/adminlogin' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='manageflights' element={<ManageFlights />} />
          <Route path='booktickets' element={<BookTickets />} />
          <Route path='aboutus' element={<About />} />
          <Route path='holiday' element={<Holiday />} />
          <Route path='hotels' element={<Hotels />} />
          <Route path='bookingdetails' element={<BookingDetails />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;