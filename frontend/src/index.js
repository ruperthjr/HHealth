import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { TrendsProvider } from './context/TrendsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <TrendsProvider>
        <App />
      </TrendsProvider>
    </AuthProvider>
  </React.StrictMode>
);