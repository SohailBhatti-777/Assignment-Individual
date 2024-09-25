import React from 'react'
import "./FeatureCourses.css"
import img1 from './assests/images/course1.jpg';
import img2 from './assests/images/course2.jpg';

const FeatureCourses = () => {
  return (
<div class="course">
<div class="view-all">
    <a href="#">View All <i class='bx bx-right-arrow-alt'></i></a>
</div>
<div class="place-container">
    <h2>Featured Courses</h2>
    <div class="most-visited-places">
        <div class="places">
            <img src={img1} alt="course 1"/>
            <div class="place-info">
                <div class="ratting">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star-half' ></i> <span>[11k Votes]</span>
                </div>
                <h3>Full Word Press Course</h3>
                <p>Ms. Lara Croft <span>/July 21, 2018</span></p>
                <p class="price">FREE</p>
            </div>
        </div>
        <div class="places">
            <img src={img2} alt="place 2"/>
            <div class="place-info">
                <div class="ratting">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i> <span>[25.8k Votes]</span>
                </div>
                <h3>Mern Stack Developer Course</h3>
                <p>Mr. John Wick</p>
                <p class="price">$40<span class="original-price">$100</span></p>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default FeatureCourses