import React from 'react';
import './Projects.scss';

export default function Projects() {
    // let slideIndex = 1;
    // showSlides(slideIndex);

    // function plusSlides(n) { 
    //     showSlides(slideIndex += n);
    // }
    
    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }
    
    // function showSlides(n) {
    //   let i;
    //   const slides = document.getElementsByClassName("mySlides");
    //   console.log(slides);
    //   const dots = document.getElementsByClassName("dot");

    //   if (n > slides.length) {slideIndex = 1}    
    //   if (n < 1) {slideIndex = slides.length}

    //   for (i = 0; i < slides.length; i++) {
    //       slides[i].style.display = "none";  
    //   }

    //   for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   console.log(slides[slideIndex-1]);

    //     // slides[slideIndex-1].style.display = "block";  
    // //   dots[slideIndex-1].className += " active";
    // }

    return (
        <div className="projects">

            <p>Selected Projects</p>
            {/* <p>Another line?</p> */}

            {/* <div className="slideshow-container">

                <div className="mySlides fade">
                    <img src="https://place-puppy.com/300x325" alt="temp alt text" />
                    <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fade">
                    <img src="https://place-puppy.com/300x200" alt="temp alt text" />
                    <div className="text">Caption Two</div>
                </div>

                <div className="mySlides fade">
                    <img src="https://place-puppy.com/300x300"  alt="temp alt text" />
                    <div className="text">Caption Three</div>
                </div>

                <button className="prev" onClick={() => plusSlides(-1)}> &#10094;</button>
                <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>

            </div>
            <br />

            <div>
                <span className="dot" onClick={() => currentSlide(1)}></span> 
                <span className="dot" onClick={() => currentSlide(2)}></span> 
                <span className="dot" onClick={() => currentSlide(3)}></span> 
            </div> */}
        </div>
    )
}
