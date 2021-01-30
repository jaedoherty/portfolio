import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter, Link} from 'react-router-dom'
import Fade from './components/fade.jsx'
import Nav from "./components/nav";
// import reportWebVitals from './reportWebVitals';

const Site = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
   setShow((show) => show)
  // setShow((show) => {
  //   return {
  //     // ...prevState,
  //     show: false,
  //   };
  // });
  // setShow((show) => {
  //   return {
  //     // ...prevState,
  //     show: true,
  //   };
  // });

  }

  // const reappear = () => {
  //     setTimeout(
  //       setShow((show) => show),
  //       1000
  //     ); 
  // }
         
  
  return (
    <div>
      <div id="nav">
        <Link to="/" onClick={handleClick}>
          <div className="nav-link">About</div>
        </Link>
        <Link to="/projects" onClick={handleClick}>
          <div className="nav-link">Projects</div>
        </Link>
        <a className="nav-link" href="https://github.com/jaedoherty">
          <div>GitHub</div>
        </a>
        <a className="nav-link" href="https://www.linkedin.com/in/jae-doherty/">
          <div>LinkedIn</div>
        </a>
        <a className="nav-link" href="https://angel.co/u/jae-doherty">
          <div>AngelList</div>
        </a>
      </div>

      <Fade show={show}>
        <App />
      </Fade>
    </div>
  );
};

ReactDOM.render(
  <HashRouter>
    <Site />
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
