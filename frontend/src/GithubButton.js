import React from 'react';

const GithubButton = () => {
  const handleButtonClick = () => {
    // Redirect to Microsoft Teams
    window.location.href = 'https://github.com/';
  };

  return (
    <button onClick={handleButtonClick} style={{ background: 'transparent', border: 'none' , textAlign:"center"}}>
      <img
        src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" // Replace with the path to the Teams logo image
        alt="Microsoft Teams"
        width="80"
        height="25"
      />
    </button>
  );
};

export default GithubButton;