<<<<<<< HEAD
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
=======
import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from "./App";
import { ShoppingComponent } from "./components/ShoppingComponent";
import { formikValidation } from "./components/FormikValidation";
import { YupValidation } from "./components/YupValidation";
import { FormikValidationComponent } from "./components/FormikValidationComponent";
import { SpaIndex } from "./SPA/SpaIndex";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <SpaIndex />
</React.StrictMode>
);
>>>>>>> fbad00a06aeb24adcc1cdb900c1c736058d107ac
