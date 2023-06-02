import React, { useEffect, useState } from 'react';

const ViewAppointments = ({ handleBack }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch appointments from the API
    fetch('http://localhost:8080/hospital/appointment/list')
      .then((response) => response.json())
      .then((data) => {
        // Update state with fetched appointments
        setAppointments(data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error fetching appointments:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h3>View Appointments</h3>
      {loading ? (
        <p>Loading appointments...</p>
      ) : (
        <div>
          {appointments.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Appointment ID</th>
                  <th>Patient ID</th>
                  <th>Blood Group</th>
                  <th>Doctor ID</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.apId}>
                    <td>{appointment.apId}</td>
                    <td>{appointment.patId}</td>
                    <td>{appointment.bloodGroup}</td>
                    <td>{appointment.docId}</td>
                    <td>{appointment.appointmentDate}</td>
                    <td>{appointment.appointmentTime}</td>
                    <td>{appointment.appointmentStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No appointments found.</p>
          )}
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
};

export default ViewAppointments;
