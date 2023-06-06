import React, { useState } from 'react';
import '../Homepage.css'; // Import the CSS file
import './RegistrationForm.css'; // Import the CSS file

const RegistrationForm = ({ handleBack, handleFormSubmit }) => {
  const initialFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    role: '', // Set default value as empty string
    password: '',
    speciality: '', // Only for Doctor role
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormReset = () => {
    setFormValues(initialFormValues);
  };

  return (
    <section className="form-section">
      <div className="back-button-container">
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      </div>
      <h1 className="register-title">Register</h1>
      <form className="register-form" onSubmit={handleFormSubmit} onReset={handleFormReset}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formValues.firstName}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNo">Phone No:</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            value={formValues.phoneNo}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
          type=""
            id="role"
            name="role"
            value={formValues.role}
            onChange={handleFormChange}
          >
            <option value="">Select Role</option> {/* Default value */}
            <option value="Doctor">Doctor</option>
            <option value="Receptionist">Receptionist</option>
          </select>
        </div>
        {formValues.role === 'Doctor' && (
          <div>
            <label htmlFor="speciality">Speciality:</label>
            <input
              type="text"
              id="speciality"
              name="speciality"
              value={formValues.speciality}
              onChange={handleFormChange}
            />
          </div>
        )}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <button type="reset" className="reset-button">
            Reset
          </button>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationForm;
