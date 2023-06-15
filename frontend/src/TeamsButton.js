import React from 'react';

const TeamsButton = () => {
  const handleButtonClick = () => {
    // Redirect to Microsoft Teams
    window.location.href = 'https://teams.microsoft.com';
  };

  return (
    <button onClick={handleButtonClick} style={{ background: 'transparent', border: 'none' }}>
      <img
        src="teams-logo.png" // Replace with the path to the Teams logo image
        alt="Microsoft Teams"
        width="24"
        height="24"
      />
    </button>
  );
};

export default TeamsButton;