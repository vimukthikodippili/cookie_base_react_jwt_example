import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';

export default function AppRoutes() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
      <Route path="/login" element={<LoginForm onLogin={setUser} />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}