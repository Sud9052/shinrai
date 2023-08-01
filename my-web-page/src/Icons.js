import React from 'react';
import AU from './Assets/Flags/AU.png';
import CA from './Assets/Flags/Canada.png'; 
import US from './Assets/Flags/US.png'; 
import UK from './Assets/Flags/UK.png'; 


const Icons = () => {
  return (
    <div className="icons-container">
      <img src={AU} alt="Australia" />
      <img src={CA} alt="Canada" />
      <img src={US} alt="United States of America" />
      <img src={UK} alt="United Kingdom" />
    </div>
  );
};

export default Icons;
