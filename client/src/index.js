import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext'; // ✅ Auth context

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider> {/* ✅ Wrap App with AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// Optional: Performance measurement
reportWebVitals();
