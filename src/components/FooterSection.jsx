import React from 'react'
import "./FooterSection.css"
import img1 from './assests/images/facebook.png';
import img2 from './assests/images/google-plus.png';
import img3 from './assests/images/instagram.png';
import img4 from './assests/images/twitter.png';
import img5 from './assests/images/appstore-btn.png';
import img6 from './assests/images/googleplay-btn.png';

const FooterSection = () => {
  return (
    <footer>
    <div class="footer-container">
        <div class="footer-section">
            <h2>Timeless Trails</h2>
            <p>Welcome to Eudetor, your premier online learning platform dedicated to empowering individuals through education. Join us on your learning journey and unlock your potential today!</p>
            <p>&copy; 2024 All rights reserved | This template is made with <span><i class='bx bxs-heart'></i></span> by <span> Eudetor</span></p>
        </div>

        <div class="footer-section">
            <h3>Contact Us</h3>
            <p class="end-e"><i class='bx bxs-envelope' ></i> timelesstrails@gmail.com</p>
            <p class="end-p"><i class='bx bxs-phone'></i> +923867643423</p>
            <p class="end-l"><i class='bx bx-current-location' ></i> 40 Street Plaza, New York City [US]</p>
        </div>

        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Forums</a></li>
                <li><a href="#">Language Packs</a></li>
                <li><a href="#">Release Status</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Follow Us</h3>
            <div class="social-icons">
                <a href="#"><img src={img1} alt="facebook" /></a>
                <a href="#"><img src={img2} alt="instagram" /></a>
                <a href="#"><img src={img3} alt="google +" /></a>
                <a href="#"><img src={img4} alt="twitter" /></a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
    <div class="img-google-app">
        <a href="#"><img src={img5} alt="App Store" /></a>
        <a href="#"><img src={img6} alt="Google Play" /></a>
    </div>
        <div class="bottom-links">
            <a href="#" class="b1">DPA</a><a href="#" class="b2">Terms of Use</a><a href="#" class="b3">Privacy Policy</a>
        </div>
    </div>
</footer>

  )
}

export default FooterSection