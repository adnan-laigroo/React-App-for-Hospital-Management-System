import React, { useState } from 'react';
import './Homepage.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import LoginForm from './components/LoginForm';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import RegisterForm from './RegistrationForm';
import DoctorDashboard from './components/DoctorDashboard';
import ReceptionistDashboard from './components/ReceptionistDashboard';

const Homepage = () => {
  const [activeButton, setActiveButton] = useState('Home');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setShowLoginForm(false);
    setShowRegisterForm(false);
    setShowAbout(false);
    setShowContact(false);

    if (buttonName === 'Home') {
      // Handle home button click if needed
    } else if (buttonName === 'Login') {
      setShowLoginForm(true);
    } else if (buttonName === 'Register') {
      setShowRegisterForm(true);
    } else if (buttonName === 'About') {
      setShowAbout(true);
    } else if (buttonName === 'Contact') {
      setShowContact(true);
    }
  };

  const handleBackButtonClick = () => {
    setActiveButton('Home');
    setShowLoginForm(false);
    setShowRegisterForm(false);
    setShowAbout(false);
    setShowContact(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', e.target);
    // Perform backend validation and set loggedIn and userRole accordingly
    // For simplicity, let's assume successful validation for the example
    setLoggedIn(true);
    setUserRole(e.target.username.value === 'doctor' ? 'Doctor' : 'Receptionist');
  };

  return (
    <div>
      <Header />
      <Navigation activeButton={activeButton} handleButtonClick={handleButtonClick} />

      {activeButton === 'Home' && (
        <HomeSection handleButtonClick={handleButtonClick} />
      )}

      {showLoginForm && !loggedIn && (
  
      <LoginForm handleBackButtonClick={handleBackButtonClick} handleFormSubmit={handleFormSubmit} />
      
      )}

      {showRegisterForm && (
        <RegisterForm handleBackButtonClick={handleBackButtonClick} handleFormSubmit={handleFormSubmit} />
      )}

      {showAbout && (
        <AboutSection />
      )}

      {showContact && (
        <ContactSection />
      )}

      {loggedIn && userRole === 'Doctor' && (
        <DoctorDashboard handleLogout={handleBackButtonClick} />
      )}

      {loggedIn && userRole === 'Receptionist' && (
        <ReceptionistDashboard handleLogout={handleBackButtonClick} />
      )}

      {/* Rest of the content */}
    </div>
  );
};

export default Homepage;
