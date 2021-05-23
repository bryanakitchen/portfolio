import { useEffect } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Mission from '../Mission/Mission';
import Projects from '../Projects/Projects';
import './Main.scss';

function Main() {

    useEffect(function onFirstMount() {

        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
        // const header = document.querySelector(".Header");
        const arrow = document.querySelector(".arrow");

          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            // header.classList.remove("headerQuery");
            arrow.classList.add("hidden");
          } else {
            // header.classList.add("headerQuery");
            arrow.classList.remove("hidden");
          }
        }
      
        window.addEventListener("scroll", scrollFunction);
        
        return () => {
          window.removeEventListener("scroll", scrollFunction);
        }
    }, []);

  return (
    <>
      <Header />
      
      <div className="Landing" name="home">
        <div className="landing-group">
          <div className="landing-header">
            <img src="./logo.png" alt="letter b logo" className="landing-logo" />
            <p className="name">ryana Kitchen</p>
          </div>
          <p className="title">Full Stack Software Engineer | Organization Aficionado</p>

          <div className="arrow">
            <img src="./arrow.png" alt="down arrow" />
          </div>
        </div>
      </div>

      <About />
      <Mission />
      <Projects />
      <Contact />
      
      <div className="footer">
          <p>Handcrafted by me &#169; 2021 </p>
      </div>
    </>
  );
}

export default Main;
