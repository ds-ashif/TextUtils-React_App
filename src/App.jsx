import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#222"; // Set dark background
      document.body.style.color = "white"; // Set text color
      showAlert("Dark Mode has been Enabled", "success");
      // document.title='TextUtils-Dark';  to change title of our app 
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white"; // Reset background
      document.body.style.color = "black"; // Reset text color
      showAlert("Light Mode has been Enabled", "success");
      // document.title='TextUtils-Light';
    }
  };

  return (
    <>
    {/* we can use exact path instead of path only to avoid incorrect rendering in some cases.Bcuz path only match partial url
         example-   /users-->component1   /users/new-->component2,  if we use path only in routes not exact path the only component1 will render in both cases */}
      <Router>
        <Navbar title="TextUtils" abouttxt="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />

        <div className='my-3'>
          <Routes>
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Your Text to Analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
