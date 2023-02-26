import React, { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
    console.log(darkMode);
  }
  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
