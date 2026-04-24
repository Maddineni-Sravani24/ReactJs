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