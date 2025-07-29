import { useSelector } from 'react-redux';

export default function Dashboard() {
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <h2>Welcome, {user?.name || 'Guest'}!</h2>
      <p>This is your dashboard.</p>
    </div>
  );
}