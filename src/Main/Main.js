import { useEffect } from 'react';
import Header from '../Header/Header';
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
    
    <div className="about">
      <div >
        <h3>Hi, I'm Bryana. It's nice to meet you!</h3>
        <p>
          I'm a full stack software engineer who loves making environments more organized.
        </p>
      </div>

        <div id="projects">Projects</div>
        <div id="mission">Mission</div>
        <div id="contact">Mission</div>
    </div>
    </>
  );
}

export default Main;
