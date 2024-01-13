import React, { useState } from 'react';

const LearnMoreButton = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  const handleButtonClick = () => {
    setShowWelcomeMessage(true);
    setHideButton(true);
  };

  return (
    <div className="center">
      {!hideButton && <button className= "button" onClick={handleButtonClick}>Learn More!</button>}

      {showWelcomeMessage && (
        <div className='greeting'> 
          <h2>Welcome to Treehill Park Condos!</h2>
          <p>
            Thank you for your interest in Treehill Park! We are a 51 member condo association located in the 
            heart of Sherwood, AR at the corner of Shelby and Kiehl next to City Hall. Our property was built in 
            1984 and consists of 6 residential buildings and a clubhouse with a pool.   
          </p>
        </div>
      )}
    </div>
  );
};

export default LearnMoreButton;
