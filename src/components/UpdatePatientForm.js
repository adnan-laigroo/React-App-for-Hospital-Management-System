import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const UpdatePatientForm = ({ handleBack }) => {
  const [patId, setPatId] = useState('');
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    contactNumber: '',
  });
  const [error, setError] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    if (!initialLoad) {
      // Fetch patient details based on patId
      fetch(`http://localhost:8080/hospital/patient/get/${patId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error fetching patient details');
          }
          return response.json();
        })
        .then((data) => {
          setPatientData({
            name: data.firstName + ' ' + data.lastName,
            age: data.age,
            gender: data.gender,
            address: data.address.firstLine + ', ' + data.address.secondLine + ', ' + data.address.pincode,
            contactNumber: data.phoneNo,
          });
          setError('');
        })
        .catch((error) => {
          console.error('Error fetching patient details:', error);
          setError('Failed to fetch patient details. Please try again.');
        });
    } else {
      setInitialLoad(false);
    }
  }, [patId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Prepare updated patient data
    const updatedPatientData = {
      patId: patId,
      firstName: patientData.name.split(' ')[0],
      lastName: patientData.name.split(' ')[1],
      address: {
        firstLine: patientData.address.split(',')[0].trim(),
        secondLine: patientData.address.split(',')[1].trim(),
        pincode: patientData.address.split(',')[2].trim(),
      },
      phoneNo: patientData.contactNumber,
    };

    // Send API request to update the patient
    fetch(`http://localhost:8080/hospital/patient/update/${patId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPatientData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error updating patient');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Patient Updated:', data);
        setUpdateSuccess(true);
        setError('');
      })
      .catch((error) => {
        console.error('Error updating patient:', error);
        setError('Failed to update patient. Please try again.');
      });
  };

  return (
    <div className="update-patient-form-container">
      <h3>Update Patient</h3>
      <form className="update-patient-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="patId">Patient ID:</label>
          <input
            type="text"
            id="patId"
            name="patId"
            value={patId}
            onChange={(e) => setPatId(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={patientData.name}
            onChange={(e) =>
              setPatientData({ ...patientData, name: e.target.value })
            }
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={patientData.age}
            onChange={(e) =>
              setPatientData({ ...patientData, age: e.target.value })
            }
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={patientData.gender}
            onChange={(e) =>
              setPatientData({ ...patientData, gender: e.target.value })
            }
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={patientData.address}
            onChange={(e) =>
              setPatientData({ ...patientData, address: e.target.value })
            }
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={patientData.contactNumber}
            onChange={(e) =>
              setPatientData({ ...patientData, contactNumber: e.target.value })
            }
            className="input-field"
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Update
          </button>
          <button type="button" className="back-button" onClick={handleBack}>
            Back
          </button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
      {updateSuccess && (
        <div className="success-message">
          <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
          <p>Patient updated successfully.</p>
        </div>
      )}
    </div>
  );
};

export default UpdatePatientForm;
