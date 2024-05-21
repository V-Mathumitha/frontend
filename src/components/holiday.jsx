import React from 'react';
import './holiday.css';

const Holiday = () => {
    const domesticPackages = [
        { place: "Kerala", days: 5, amount: "$500", image: "/images/kerala.jpg" },
        { place: "Goa", days: 7, amount: "$700", image: "/images/goa.jpeg" },
        { place: "Ooty", days: 3, amount: "$300", image: "/images/ooty.jpg" },
        { place: "Jaipur", days: 4, amount: "$400", image: "/images/jaipur.jpg" },
        { place: "Kodaikanal", days: 6, amount: "$600", image: "/images/kodaikanal.jpg" },
        // Add more packages as needed
    ];

    const internationalPackages = [
        { place: "Singapore", days: 5, amount: "$1500", image: "/images/singapore.jpg" },
        { place: "Thailand", days: 7, amount: "$1700", image: "/images/thailand.jpg" },
        { place: "Nepal", days: 3, amount: "$1300", image: "/images/nepal.jpg" },
        { place: "Dubai", days: 4, amount: "$1400", image: "/images/dubai.jpeg" },
        { place: "Maldives", days: 6, amount: "$1600", image: "/images/maldives.jpg" },
        // Add more packages as needed
    ];

    return (
        <div className="container">
            <h2>Domestic Fixed Tour Departure Packages</h2>
            <div className="packages">
                {domesticPackages.map((pkg, index) => (
                    <div key={index} className="package">
                        {pkg.image && <img src={pkg.image} alt={pkg.place} className="package-image" />}
                        <h3>{pkg.place}</h3>
                        <p>{pkg.days} days</p>
                        <p>{pkg.amount}</p>
                    </div>
                ))}
            </div>

            <h2>International Fixed Tour Departure Packages</h2>
            <div className="packages">
                {internationalPackages.map((pkg, index) => (
                    <div key={index} className="package">
                        {pkg.image && <img src={pkg.image} alt={pkg.place} className="package-image" />}
                        <h3>{pkg.place}</h3>
                        <p>{pkg.days} days</p>
                        <p>{pkg.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Holiday;
