import React from 'react';
import Facebook from './Assets/Facebook.jpg'; 
import Instagram from './Assets/Instagram.jpg'; 
import Twitter from './Assets/Twitter.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer>
      
        <div class="icon-container">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook"  className="social-media"/></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Twitter" className="social-media"/></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Instagram" className="social-media"/></a>
      </div>
      <div className="footer-address">
        <p>Plot No-119/A West Part, Road No-16, Snehapuri Colony, Nagole Hyderabad</p>
        <p>Phone: 9642556789, 040-42213429</p>
      </div>
    </footer>
  );
};

export default Footer;
