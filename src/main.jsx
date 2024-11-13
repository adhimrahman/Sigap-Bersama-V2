<<<<<<< HEAD
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ProfileDashboard from './pages/profileDashboard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileDashboard />
  </StrictMode>
);
=======
import React from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
>>>>>>> 7912c054e68aa14a7b507bf7ef76d4960c1ad307
