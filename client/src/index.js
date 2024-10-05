import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RailContext from './RailContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RailContext>

  <Router>
   <App />
  </Router>
</RailContext>

);
