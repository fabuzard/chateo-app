import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
//pages
import App from "./App.jsx";
import Registration from "./pages/Registration.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element= {<Registration/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
