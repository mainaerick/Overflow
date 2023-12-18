import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/styles/style.css'
import HomePage from './pages/home/HomePage';
import { Outlet } from 'react-router';
import AuthInit from './features/auth/redux/AuthInit';

function App() {
  return (
    <Suspense fallback={null} >
        <AuthInit>
          <Outlet />
        </AuthInit>
  </Suspense>
  );
}

export default App;
