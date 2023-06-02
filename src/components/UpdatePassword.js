import React from 'react';

const UpdatePassword = () => {
  const handleUpdatePassword = () => {
    const username = 'doctor'; // Replace with actual username
    const newPassword = 'newPassword'; // Replace with actual new password

    // API call to update password
    fetch(`/hospital/doctor/update/password/${username}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: newPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response or update state as needed
        console.log('Password updated:', data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error updating password:', error);
      });
  };

  return (
    <div>
      <h3>Change Password</h3>
      <button onClick={handleUpdatePassword}>Update</button>
    </div>
  );
};

export default UpdatePassword;
