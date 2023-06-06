import React, { useState } from 'react';
import './UpdatePasswordForm.css';

const AddPatientForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState({
    firstLine: '',
    secondLine: '',
    pincode: ''
  });
  const [symptom, setSymptom] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const payload = {
      firstName: firstName,
      lastName: lastName,
      phoneNo: phoneNo,
      address: address,
      symptom: symptom
    };

    // Send API request to add the patient
    fetch('http://localhost:8080/hospital/patient/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error adding patient');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Patient Added:', data);
        setError('');
        // Perform any additional actions after successfully adding the patient
      })
      .catch((error) => {
        console.error('Error adding patient:', error);
        setError('Failed to add patient. Please try again.');
      });
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setPhoneNo('');
    setAddress({
      firstLine: '',
      secondLine: '',
      pincode: ''
    });
    setSymptom('');
  };

  return (
    <div className="add-patient-form-container">
      <h3>Add Patient</h3>
      {error && <p className="error-message">{error}</p>}
      <form className="add-patient-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number:</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstLine">Address - First Line:</label>
          <input
            type="text"
            id="firstLine"
            name="firstLine"
            value={address.firstLine}
            onChange={(e) => setAddress({ ...address, firstLine: e.target.value })}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="secondLine">Address - Second Line:</label>
          <input
            type="text"
            id="secondLine"
            name="secondLine"
            value={address.secondLine}
            onChange={(e) => setAddress({ ...address, secondLine: e.target.value })}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Address - Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={address.pincode}
            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="symptom">Symptom:</label>
          <input
            type="text"
            id="symptom"
            name="symptom"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-buttons">
          <button type="reset" className="reset-button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="submit-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatientForm;
