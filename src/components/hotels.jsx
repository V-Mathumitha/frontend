import React from 'react';
import './hotels.css';

const Hotels = () => {
    const hotels = [
        { place: "Sterling kodai,Kodaikannal", image: "/images/hotela.jpg" },
        { place: "Fortune resort,ooty", image: "/images/hotelb.jpeg" },
        { place: "Meadows,munnar", image: "/images/hoteld.jpg" },
        { place: "sparrow,coimbatore", image: "/images/hotele.jpeg" },
        { place: "The High,Jammu, Goa", image: "/images/hotelf.jpg" },
        { place: "snow fall,Kashmir", image: "/images/hotelg.jpg" },
        { place: "palace,Goa", image: "/images/hotelh.jpg" },
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
