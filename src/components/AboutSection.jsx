import React from 'react'
import "./AboutSection.css"
import img1 from './assests/images/about img.jpg';

const AboutSection = () => {
  return (
    <div class="about-container">
    <div class="about-info">
        <h2>About Timeless Trails</h2>
        <p>Welcome to Eudetor, your premier online learning platform dedicated to empowering individuals through education. Our mission is to provide accessible, high-quality courses designed by industry experts, ensuring you gain the skills and knowledge necessary to excel in your career. Join us on your learning journey and unlock your potential today!</p>
        <div class="stats">
            <div>
                <h3>26M+</h3>
                <p>STUDENTS LEARNING</p>
            </div>
            <div>
                <h3>310+</h3>
                <p>ACTIVE COURSES</p>
            </div>
            <div>
                <h3>11M+</h3>
                <p>INSTRUCTORS ONLINE</p>
            </div>
            <div>
                <h3>24+</h3>
                <p>Countries Covered</p>
            </div>
        </div>
    </div>
    <div class="about-image">
        <img src={img1} alt="Travel Image"/>
        <div class="play-button"><i class='bx bx-play'></i></div>
    </div>
</div>
  )
}

export default AboutSection