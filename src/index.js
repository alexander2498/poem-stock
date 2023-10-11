import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import ButtonSendQuery from './Buttons/ButtonSendQuery.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ButtonSendQuery />
  </React.StrictMode>
);