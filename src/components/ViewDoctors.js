import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import DeleteDoctor from './DeleteDoctor';
import './userTable.css'; // Import the CSS file

const ViewDoctors = ({ handleUpdate }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteDoctorEmail, setDeleteDoctorEmail] = useState(null); // State to store the doctor's email for deletion

  useEffect(() => {
    // Fetch doctors from the API
    fetch('http://localhost:8080/hospital/doctor/list')
      .then((response) => response.json())
      .then((data) => {
        // Update state with fetched doctors
        setDoctors(data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error fetching doctors:', error);
        setLoading(false);
      });
  }, []);

  const handleDeleteDoctor = (doctorEmail) => {
    setDeleteDoctorEmail(doctorEmail); // Set the doctor's email for deletion
  };

  const handleCancelDelete = () => {
    setDeleteDoctorEmail(null); // Reset the deleteDoctorEmail to null
  };

  const handleConfirmDelete = () => {
    // Send API request to delete the doctor
    fetch(`http://localhost:8080/hospital/doctor/delete/${deleteDoctorEmail}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        // Fetch the updated list of doctors
        fetch('http://localhost:8080/hospital/doctor/list')
          .then((response) => response.json())
          .then((data) => {
            // Update state with the fetched doctors
            setDoctors(data);
          })
          .catch((error) => {
            console.error('Error fetching doctors:', error);
          });
      })
      .catch((error) => {
        console.error('Error deleting doctor:', error);
      })
      .finally(() => {
        setDeleteDoctorEmail(null); // Reset the deleteDoctorEmail to null after deletion
      });
  };

  return (
    <div className="view-doctors-container">
      <h3 className="view-doctors-heading">View Doctors</h3>
      {loading ? (
        <p>Loading doctors...</p>
      ) : (
        <div className="doctor-table-container">
          {doctors.length > 0 ? (
            <table className="doctor-table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Speciality</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor.email}>
                    <td>{doctor.firstName}</td>
                    <td>{doctor.lastName}</td>
                    <td>{doctor.email}</td>
                    <td>{doctor.phoneNo}</td>
                    <td>{doctor.speciality}</td>
                    <td>
                      <button
                        onClick={() => handleUpdate(doctor.email)}
                        className="doctor-action-button edit-button"
                      >
                        <FaEdit />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteDoctor(doctor.email)}
                        className="doctor-action-button delete-button"
                      >
                        <FaTrashAlt />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No doctors found.</p>
          )}
        </div>
      )}

      {deleteDoctorEmail && (
        <DeleteDoctor
          doctorEmail={deleteDoctorEmail}
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default ViewDoctors;
