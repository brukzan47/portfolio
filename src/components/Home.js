// Home.js
import React from 'react';
import './home.css'; // Import the CSS file
import Logo from './bruk.jpg';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Services from './Services';
import Pricing from './Pricing';
import Contact from './Contact';



const Home = () => {
  return (
    <div className="fadeIn">
      <h1>Welcome to the Home Page</h1>
      <div className="image-container">
        <img
          src={Logo} className='img' // Path to your image file
          alt="Home"
        />
        <h1 className='biruk'>Biruk Bekele</h1>
        <p className='bekele'>Front End Developer</p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <button className='button' onClick={() => window.open('https://twitter.com/ZeBrukBe', '_blank')}>
            <i className="fab fa-twitter"></i>
          </button>
          <button className='button' onClick={() => window.open('https://www.facebook.com/Bruk Bekele', '_blank')}>
            <i className="fab fa-facebook"></i>
          </button>
          <button className='button' onClick={() => window.open('https://www.instagram.com/bruk818', '_blank')}>
            <i className="fab fa-instagram"></i>
          </button>
          <button className='button' onClick={() => window.open('https://www.linkedin.com/in/biruk-bekele-8bab2a290', '_blank')}>
            <i className="fab fa-linkedin"></i>
          </button>
          <button className='button' onClick={() => window.open('https://www.youtube.com/@code.with-bruk', '_blank')}>
            <i className="fab fa-youtube"></i>
          </button>
          <button className='button' onClick={() => window.open('https://github.com/brukzan47', '_blank')}>
            <i className="fab fa-github"></i>
          </button>
          <button className='button' onClick={() => window.open('https://t.me/', '_blank')}>
            <i className="fab fa-telegram"></i>
          </button>
        </div>
      </div>
     < About/>
     <Portfolio/>
     <Resume/>
     <Services/>
     <Pricing/>
     <Contact/>
    </div>
  );
};

export default Home;
