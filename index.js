import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./Context";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>

  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();