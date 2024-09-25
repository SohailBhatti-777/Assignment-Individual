
import React from 'react'
import "./FeatureSection.css"
import img1 from './assests/images/coding.png';
import img2 from './assests/images/book-shelf.png';
import img3 from './assests/images/best-customer-experience.png';
import img4 from './assests/images/globe.png';

const FeatureSection = () => {
  return (
    <div class="features-section">
        <div class="feature">
            <div class="icon">
                <img src={img1}alt="Expert Icon"/> 
            </div>
            <h3>Learn From The Experts</h3>
            <p>Gain valuable insights and skills by learning from industry experts who bring real-world experience to your education.</p>
            <a href="#">Learn More <i class='bx bx-right-arrow-alt'></i></a>
        </div>
        <div class="feature">
            <div class="icon">
                <img src={img2} alt="Library Icon"/> 
            </div>
            <h3>Book Library & Store</h3>
            <p>Explore our Book Library & Store for a wide selection of resources to enhance your learning journey.</p>
            <a href="#">Browse Destinations <i class='bx bx-right-arrow-alt'></i></a>
        </div>
        <div class="feature">
            <div class="icon">
                <img src={img3} alt="Course Icon"/> 
            </div>
            <h3>Best Course Online</h3>
            <p>Explore the best online courses that fit your schedule and empower you with essential skills for success.</p>
            <a href="#">View Packages <i class='bx bx-right-arrow-alt'></i></a>
        </div>
        <div class="feature">
            <div class="icon">
                <img src={img4} alt="Leader Icon"/>
            </div>
            <h3>Best Industry Leaders</h3>
            <p>Learn from the best industry leaders who bring real-world experience and expertise to help you succeed in your career.</p>
            <a href="#">Meet Our Partners <i class='bx bx-right-arrow-alt'></i></a>
        </div>
    </div>
  )
}

export default FeatureSection