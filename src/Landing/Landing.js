import Header from '../Header/Header';
import './Landing.scss';

function Landing() {
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
