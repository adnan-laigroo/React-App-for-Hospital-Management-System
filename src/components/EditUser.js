import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faUser } from '@fortawesome/free-solid-svg-icons';

const EditUser = ({ handleBack }) => {
  return (
    <div className="edit-user-container">
      <h2 className="edit-user-heading">Edit User</h2>
      <div className="edit-user-options">
        <button className="edit-user-button">
          <FontAwesomeIcon icon={faUserMd} className="edit-user-icon" />
          <span className="edit-user-label">Edit Doctor</span>
        </button>
        <button className="edit-user-button">
          <FontAwesomeIcon icon={faUser} className="edit-user-icon" />
          <span className="edit-user-label">Edit Receptionist</span>
        </button>
      </div>
      <button className="back-button" onClick={handleBack}>Back</button>
    </div>
  );
};

export default EditUser;
