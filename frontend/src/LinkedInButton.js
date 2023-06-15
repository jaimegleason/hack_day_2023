import React from 'react';

const LinkedInButton = () => {
  const handleButtonClick = () => {
    // Redirect to Microsoft Teams
    window.location.href = 'https://www.linkedin.com/feed/';
  };

  return (
    <button onClick={handleButtonClick} style={{ background: 'transparent', border: 'none' , textAlign:"center"}}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" // Replace with the path to the Teams logo image
        alt="LinkedIn"
        width="50"
        height="50"
      />
    </button>
  );
};

export default LinkedInButton;