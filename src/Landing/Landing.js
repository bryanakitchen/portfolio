import { useEffect } from 'react';
import Header from '../Header/Header';
import './Landing.scss';

function Landing() {

    useEffect(function onFirstMount() {

        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
        const header = document.getElementById("Header");

          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
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
      <p className="Landing-header">
        Welcome
      </p>
        <div id="projects">Projects</div>
        <div id="mission">Mission</div>
        <div id="contact">Mission</div>
    </div>
    </>
  );
}

export default Landing;