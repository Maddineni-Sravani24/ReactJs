import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ElementStateEventDemo } from './ElementStateEventDemo';
import { MouseEventsDemo } from './MouseEventDemo';
import { CycleLogin } from './CustomComponents/LifeCycleHooks/CycleLogin';
import { Shopping } from './CustomComponents/LifeCycleHooks/Shopping';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Shopping />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
