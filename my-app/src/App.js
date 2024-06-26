import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import
{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App()
{
  const [mode, setMode] = useState('success')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>
    {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>
  {
    if (mode === 'success')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode had been enabled", "success");
      document.title = "TextUtils - Light Mode"
    }
    else
    {
      setMode('success');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode had been enabled", "success");
      document.title = "TextUtils - Dark Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtil2" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;