export default function Dashboard({ user }) {
  return (
    <div>
      <h2>Welcome, {user?.name || 'Guest'}</h2>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
}