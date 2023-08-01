import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './Assets/1.jpg'; 
import img2 from './Assets/2.jpg'; 
import img3 from './Assets/3.jpg'; 
import logo from './Assets/1.png'; 

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        <div className="image-container">
          <img src={img1} alt="Image 1"  className="image" />
          <p className="text-overlay">The Future Begins Here!<br />Finding your next Advisor is as easy as counting from one to five</p>
        </div>
        <div className="image-container">
          <img src={img2} alt="Image 2" className="image"/>
          <p className="text-overlay">Migration Study Abroad Guidance<br />With overall experience, we’ll ensure you always get the best guidance<br />We’re with you every step of the way<br />Imagine Greatness</p>
        </div>
        <div className="image-container">
          <img src={img3} alt="Image 3" className="image"/>
          <p className="text-overlay">Migration Study Abroad Guidance<br />With overall experience, we’ll ensure you always get the best guidance<br />We’re with you every step of the way<br />Imagine Greatness</p>
        </div>
        {/* Add more images and captions as needed */}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
