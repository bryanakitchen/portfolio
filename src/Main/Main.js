import { useEffect } from 'react';
import Header from '../Header/Header';
import './Main.scss';

function Main() {

    useEffect(function onFirstMount() {

        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
        const header = document.getElementById("Header");
        const arrow = document.getElementById("arrow");

          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("sticky");
            arrow.classList.add("hidden");
          } else {
            header.classList.remove("sticky");
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
    <div className="Main">
      <div className="Main-header">
        <p>Welcome</p>
        <div className="arrow" id="arrow">
          <img src="./arrow.png" alt="down arrow" />
        </div>
      </div>
        <div id="projects">Projects</div>
        <div id="mission">Mission</div>
        <div id="contact">Mission</div>
    </div>
    </>
  );
}

export default Main;
