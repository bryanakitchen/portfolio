import { useEffect } from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Mission from '../Mission/Mission';
import Projects from '../Projects/Projects';
import './Main.scss';

function Main() {

    useEffect(function onFirstMount() {

        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
        // const header = document.getElementById("Header");
        const arrow = document.getElementById("arrow");

          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            // header.classList.add("sticky");
            arrow.classList.add("hidden");
          } else {
            // header.classList.remove("sticky");
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
    <div className="Landing">
      <div className="Landing-group">
        <div className="Landing-header">
          <img src="./logo.png" alt="letter b logo" className="landing-logo" />
          <p className="name">ryana Kitchen</p>
        </div>
        <p className="title">Full Stack Software Engineer | Organization Aficionado</p>

        <div className="arrow" id="arrow">
          <img src="./arrow.png" alt="down arrow" />
        </div>
      </div>
    </div>

    <About />
    <Mission />
    <Projects />
    
     <div >
        <div id="projects">Projects</div>
        <div id="mission">Mission</div>
        <div id="contact">Contact</div>
    </div>
    </>
  );
}

export default Main;
