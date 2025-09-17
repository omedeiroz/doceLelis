import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import OrdersScreen from './src/screens/OrdersScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <OrdersScreen onLogout={handleLogout} />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
      <StatusBar style="auto" />
    </>
  );
}


