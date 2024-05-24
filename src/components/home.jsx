import React from 'react';

const Home = () => {
    return (
        <div className="dashboard-content">
            <h2>Welcome to AirFlight Dashboard</h2>
            <p>Explore our travel destinations and services.</p>
            
            <div className="image-container">
                <div className="image-item">
                    <img src="/images/explore.jpeg" alt="Image 1" />
                    <h3>Exploring the world, one destination at a time</h3>
                    <p>"Exploring the world, one destination at a time" encapsulates the essence of travel, evoking a sense of curiosity, adventure, and discovery. Each journey is a chapter in the story of exploration, where every destination offers a unique experience waiting to be embraced</p>
                </div>
                
                {/* Add more image items */}
                <div className="image-item">
                    <img src="/images/change3.jpeg" alt="Image 2" />
                    <h3>Travelling is Fun!!!</h3>
                    <p>"Travelling is Fun!!!" captures the joy and excitement of embarking on new adventures. It's a celebration of discovery, where every moment becomes a cherished memory and every destination a playground for exploration</p>
                </div>
                
                <div className="image-item">
                    <img src="/images/ticket.jpeg" alt="Image 3" />
                    <h3>Free Flight Vouchers</h3>
                    <p>"Free Flight Vouchers" beckons with the promise of boundless possibilities, offering the gift of skyward adventures without constraints. It's an invitation to seize the skies, explore new horizons, and create unforgettable journeys, all on the wings of freedom.</p>
                </div>
                
                <div className="image-item">
                    <img src="/images/complimentary.jpg" alt="Image 4" />
                    <h3>Complimentary Upgrades</h3>
                    <p>"Complimentary Upgrades" elevate the travel experience, turning ordinary journeys into extraordinary adventures. With every upgrade, luxury and comfort seamlessly intertwine, ensuring every moment of your voyage is marked by indulgence and relaxation.</p>
                </div>
                
                <div className="image-item">
                    <img src="/images/save.jpeg" alt="Image 5" />
                    <h3>Save 20% and Enjoy</h3>
                    <p>"Save 20% and enjoy" offers the dual delight of saving while savoring the pleasures of travel. It's an opportunity to stretch your budget further and maximize your experiences, ensuring every adventure is as rewarding as it is memorable.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
