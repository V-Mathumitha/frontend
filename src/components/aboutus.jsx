import React from 'react';
import './about.css';



const About = () => {
    return (
        <div className="container">
            <div className="service" id="culinary-services">
                <h2>Culinary Services</h2>
                <img src = '/images/food.jpg' alt="Culinary Services" /> 
                <ul>
                    <li>Complimentary meals and snacks on board</li>
                    <li>A varied selection of free hot and cold beverages – both alcoholic and non-alcoholic</li>
                    <li>Special meals for vegetarians, people with food allergies and members of certain religious faiths</li>
                    <li>Country-specific cuisine tailored to regional tastes on international routes</li>
                    <li>Colourful, tasty and healthy meals especially for children</li>
                </ul>
            </div>
            <div className="service" id="entertainment">
                <h2>Entertainment</h2>
                <img src="/images/movies.jpg" alt="movies" />
                <p><strong>Films, Series and TV</strong><br/>
                    You can expect a world full of excitement, action, fun, and romance above the clouds. Look forward to a wide selection of films, TV series, and documentaries. Thanks to intuitive operation, you can enjoy pure entertainment quickly and easily and create your personal playlist. We hope you enjoy the entertainment.
                </p>
                <p><strong>Audiobooks and Music</strong><br />
                    Whether rock, pop, classical, jazz, folk, or the latest charts – select your favorite titles from our wide range of music, learn about your travel destination, or listen to one of our numerous audiobooks in German or English. Simply sit back, close your eyes, and enjoy a relaxed flight.
                </p>
            </div>
            <div className="service" id="internet">
                <h2>Internet</h2>
                <img src="/images/films.jpg" alt="internet" />
                <p><strong>FlyNet on board</strong><br/>
                    Rethinking air travel.AirFlight FlyNet on-board Internet offers you an abundance of new possibilities, whether you wish to use your time for working or for some relaxed surfing.
                </p>
                <p><strong>Experience limitless communication</strong><br />
                    Simply connect your smartphone, tablet or laptop via Wi-Fi to the FlyNet® network and get started. Whether you want to surf for fun or would prefer to spend your time on board working, AirFlight FlyNet creates the ideal conditions for you:
                </p>
                <ul>
                    <li>Stay connected with friends, family and colleagues</li>
                    <li>Send emails with file attachments</li>
                    <li>Surf quickly and securely</li>
                    <li>Access your company's Virtual Private Network (VPN)</li>
                </ul>
                <p>FlyNet® is available on an ever increasing number of flights.</p>
            </div>
        </div>
    );
}

export default About;



