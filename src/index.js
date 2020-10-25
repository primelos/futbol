import React from 'react';
import ReactDOM from 'react-dom';
import './Resources 2/css/app.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes';


const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
  
      <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);
