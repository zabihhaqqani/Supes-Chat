import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import DataProvider from "./context/dataContext";
import AuthProvider from "./context/authContext";
import { ThemeProvider } from "./context/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
makeServer();

root.render(
  <Router>
    <AuthProvider>
      <DataProvider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </DataProvider>
    </AuthProvider>
  </Router>
);

reportWebVitals();
