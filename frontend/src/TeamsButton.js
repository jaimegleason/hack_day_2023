import React from 'react';

const TeamsButton = () => {
  const handleButtonClick = () => {
    // Redirect to Microsoft Teams
    window.location.href = 'https://teams.microsoft.com';
  };

  return (
    <button onClick={handleButtonClick} style={{ background: 'transparent', border: 'none' , textAlign:"center"}}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" // Replace with the path to the Teams logo image
        alt="Microsoft Teams"
        width="50"
        height="50"
      />
    </button>
  );
};

export default TeamsButton;