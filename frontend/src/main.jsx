import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // ✅ use createRoot
import './index.css';
import App from './App.jsx';
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </StrictMode>
);
