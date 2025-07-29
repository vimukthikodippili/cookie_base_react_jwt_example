import { useSelector } from 'react-redux';
import LogoutButton from './LogoutButton';

export default function Dashboard() {
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <h2>Welcome, {user?.name || 'Guest'}!</h2>
      <LogoutButton />
    </div>
  );
}