import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from './context/userContext';

ReactDOM.render(
  <UserProvider>
    <Router>
      <App />
    </Router>
    </UserProvider>,
  document.getElementById('root')
);
