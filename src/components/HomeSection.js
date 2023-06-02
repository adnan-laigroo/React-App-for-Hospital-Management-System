import React from 'react';

const HomeSection = ({ handleButtonClick }) => {
  return (
    <section>
      <h2>Welcome to the Hospital Management System.</h2>
      <div id="session">
        <button onClick={() => handleButtonClick('Login')}>Login</button>
        <button onClick={() => handleButtonClick('Register')}>Register</button>
      </div>
    </section>
  );
};

export default HomeSection;
