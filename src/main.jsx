import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, Github, Hello } from './App.jsx';
import { NewApp, About, Contact, History } from './Router.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const dishes = ['Jollor', 'Beans', 'Rice'];

ReactDOM.createRoot(document.getElementById('root')).render(
  // using react browser router for different web pages
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NewApp />} />
      <Route path="/about" element={<About />} >
        <Route path="history" element={ <History/> } />

      </Route>
      <Route path="/contact" element={<Contact />} />
      {/* <App random='Just a quote' dishes={dishes} library="React" /> */}
      {/* <Github /> */}
      {/* <Hello /> */}
    </Routes>
  </BrowserRouter>,
);
