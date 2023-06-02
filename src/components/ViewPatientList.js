import React from 'react';

const ViewPatientList = () => {
  const handleViewPatients = () => {
    // API call to view patients
    fetch('/hospital/doctor/patient')
      .then((response) => response.json())
      .then((data) => {
        // Process the data or update state as needed
        console.log('Patients:', data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error fetching patients:', error);
      });
  };

  return (
    <div>
      <h3>View Patients</h3>
      <button onClick={handleViewPatients}>View</button>
    </div>
  );
};

export default ViewPatientList;
