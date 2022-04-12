import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import RoutesApp from "./routes/routes.tsx"


ReactDOM.render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>,
  document.getElementById('root')
);
