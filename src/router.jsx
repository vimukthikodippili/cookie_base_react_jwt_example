import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { useSelector } from 'react-redux';

export default function AppRoutes() {
  const user = useSelector(state => state.auth.user);

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}