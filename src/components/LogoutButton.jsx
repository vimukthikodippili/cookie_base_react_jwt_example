import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout', {}, { withCredentials: true }); // Backend should clear the cookie
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}