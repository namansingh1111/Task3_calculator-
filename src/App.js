import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your CSS file for global styles
import Calculator from './Calculator'; // Import your Calculator component

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <Calculator />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
