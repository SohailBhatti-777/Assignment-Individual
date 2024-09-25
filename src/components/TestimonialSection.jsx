import React from 'react'
import "./TestimonialSection.css"
import img1 from './assests/images/testimonial 1.jpg';
import img2 from './assests/images/testimonial 2.jpg';
import img3 from './assests/images/testimonial 3.jpg';


const TestimonialSection = () => {
  return (
    <div class="testimonial-sliders">
        <input type="radio" id="testimonial1" name="slider" checked />
        <input type="radio" id="testimonial2" name="slider" />
        <input type="radio" id="testimonial3" name="slider" />
    
        <div class="container">
            <div class="testimonials">
                <div class="images">
                    
                    <img src={img1} alt="Person 1" class="testimonial1" height="100px" width="100px" />
                   
                    <img src={img2} alt="Person 2" class="testimonial2" height="100px" width="100px" />
                    
                    <img src={img3} alt="Person 3" class="testimonial3" height="100px" width="100px" />
                </div>
    
                <div class="texts">
                    <div class="testimonial testimonial1">
                        <p>The accounting course made everything so easy to understand. I feel more confident in my skills now!</p>
                        <h4>EMMA SMITH <span>[University of California]</span></h4>
                    </div>
                    <div class="testimonial testimonial2">
                        <p>This web development course took my skills to the next level. The projects were fantastic!</p>
                        <h4>DAVID WILLIAMS <span>[MIT]</span></h4>
                    </div>
                    <div class="testimonial testimonial3">
                        <p>"The chemistry course was beginner-friendly and super engaging. I loved every lesson!</p>
                        <h4>ALICE SMITH <span>[University of Oxford]</span></h4>
                    </div>
                    <i class='bx bxs-quote-alt-right'></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialSection