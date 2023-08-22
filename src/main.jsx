import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, Github, Hello } from './App.jsx';
import './index.css';

const dishes = ['Jollor', 'Beans', 'Rice'];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App random='Just a quote' dishes={dishes} library="React" /> */}
    {/* <Github /> */}
    <Hello />
  </React.StrictMode>,
);
