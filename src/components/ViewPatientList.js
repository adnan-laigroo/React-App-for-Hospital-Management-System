import React, { useEffect, useState } from 'react';
import './tableStyle.css'; // Import the CSS file

const ViewPatientList = ({ handleBack }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch patients from the API
    fetch('http://localhost:8080/hospital/patient/list')
      .then((response) => response.json())
      .then((data) => {
        // Update state with fetched patients
        setPatients(data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error fetching patients:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h3>View Patients</h3>
      {loading ? (
        <p>Loading patients...</p>
      ) : (
        <div className="table-container">
          {patients.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Symptom</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.patId}>
                    <td>{patient.patId}</td>
                    <td>{patient.firstName}</td>
                    <td>{patient.lastName}</td>
                    <td>
                      {patient.address.firstLine}, {patient.address.secondLine},{' '}
                      {patient.address.pincode}
                    </td>
                    <td>{patient.phoneNo}</td>
                    <td>{patient.symptom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No patients found.</p>
          )}
         <div className="button-container"> {/* Add a container for the back button */}
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPatientList;
