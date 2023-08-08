import React, { useState } from "react";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container-dark-mode-button">
      <div className="dark-mode-button" onClick={toggleDarkMode}></div>
    </div>
  );
};

export default DarkModeButton;
