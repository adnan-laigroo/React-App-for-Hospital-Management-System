import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEdit, faList, faCalendarPlus, faKey, faEye } from '@fortawesome/free-solid-svg-icons';

const ReceptionistDashboard = ({ handleLogout }) => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      const dateTimeString = date.toLocaleString([], options);
      setCurrentDateTime(dateTimeString);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const handleOptionClick = (optionName) => {
    // Handle the click event for each option
    if (optionName === 'addPatient') {
      // Perform the necessary action for adding a new patient
    } else if (optionName === 'updatePatient') {
      // Perform the necessary action for updating a patient
    } else if (optionName === 'patientList') {
      // Perform the necessary action for getting the patient list
    } else if (optionName === 'addAppointment') {
      // Perform the necessary action for adding a new appointment
    } else if (optionName === 'updateAppointment') {
      // Perform the necessary action for updating an appointment
    } else if (optionName === 'viewAppointments') {
      // Perform the necessary action for viewing appointments
    } else if (optionName === 'updatePassword') {
      // Perform the necessary action for updating the receptionist's password
    }
  };
  const AddPatientButton = ({ onClick }) => (
    <button className="option-button receptionist" onClick={onClick}>
      <FontAwesomeIcon icon={faUserPlus} size="2x" />
      <span className="option-label">Add Patient</span>
    </button>
  );
  
  const UpdatePatientButton = ({ onClick }) => (
    <button className="option-button receptionist" onClick={onClick}>
      <FontAwesomeIcon icon={faEdit} size="2x" />
      <span className="option-label">Update Patient</span>
    </button>
  );
  
  const PatientListButton = ({ onClick }) => (
    <button className="option-button receptionist" onClick={onClick}>
      <FontAwesomeIcon icon={faList} size="2x" />
      <span className="option-label">Patient List</span>
    </button>
  );
  
  const AddAppointmentButton = ({ onClick }) => (
    <button className="option-button receptionist" onClick={onClick}>
      <FontAwesomeIcon icon={faCalendarPlus} size="2x" />
      <span className="option-label">Add Appointment</span>
    </button>
  );
  
  const UpdateAppointmentButton = ({ onClick }) => (
    <button className="option-button receptionist" onClick={onClick}>
      <FontAwesomeIcon icon={faEdit} size="2x" />
      <span className="option-label">Update Appointment</span>
    </button>
  );
  
  const ViewAppointmentsButton = ({ onClick }) => (
    <button className="option-button receptionist" onClick={onClick}>
      <FontAwesomeIcon icon={faEye} size="2x" />
      <span className="option-label">View Appointments</span>
    </button>
  );
  
  const UpdatePasswordButton = ({ onClick }) => (
      <button className="option-button receptionist" onClick={onClick}>
        <FontAwesomeIcon icon={faKey} size="2x" />
        <span className="option-label">Update Password</span>
      </button>
  );
  
  return (
    <div className="dashboard">
      <div className="top-bar">
        <div className="date-time">{currentDateTime}</div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h2>Welcome, Receptionist!</h2>
      <div className="options">
        <AddPatientButton onClick={() => handleOptionClick('addPatient')} />
        <UpdatePatientButton onClick={() => handleOptionClick('updatePatient')} />
        <PatientListButton onClick={() => handleOptionClick('patientList')} />
        <AddAppointmentButton onClick={() => handleOptionClick('addAppointment')} />
        <UpdateAppointmentButton onClick={() => handleOptionClick('updateAppointment')} />
        <ViewAppointmentsButton onClick={() => handleOptionClick('viewAppointments')} />
        <UpdatePasswordButton onClick={() => handleOptionClick('updatePassword')} />
      </div>
    </div>
  );
};

export default ReceptionistDashboard;
