import React from 'react';
import HeaderComponent from './components/Header';
import {AuthProvider} from './context/AuthContext/provider';
import './App.css';

function App() {
  return (
    <AuthProvider>
        <HeaderComponent />
    </AuthProvider>
  );
}

export default App;
