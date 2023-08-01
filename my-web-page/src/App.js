import React from 'react';
import './App.css';
import Header from './Header';
import CarouselComponent from './Carousel';
import Icons from './Icons';
import Footer from './Footer';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <div className="App">
      <Header />
      <CarouselComponent />
      <Icons />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
