import React from 'react';
import './hotels.css';


const Hotels = () => {
    const hotels = [
        { place: "Sterling kodai,Kodaikannal", image: "../assets/hotela.jpg" },
        { place: "Fortune resort,ooty", image: "/assets/hotelb.jpeg" },
        { place: "Meadows,munnar", image: "/assets/hoteld.jpg" },
        { place: "sparrow,coimbatore", image: "/assets/hotele.jpeg" },
        { place: "The High,Jammu, Goa", image: "/assets/hotelf.jpg" },
        
        { place: "palace,Goa", image: "/assets/hotelh.jpg" },
        // Add more hotels as needed
    ];

    return (
        <div className="hotel-container">
            <h2>Hotel Listings</h2>
            <div className="hotels">
                {hotels.map((hotel, index) => (
                    <div key={index} className="hotel">
                        <img src={hotel.image} alt={hotel.place} className="hotel-image" />
                        <h3>{hotel.place}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hotels;
