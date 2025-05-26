import { useAuth } from "../context/AuthContext";
import PostList from "./PostList";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
      <p class="mb-4">Selamat datang, {user().name}!</p>
      <button class="bg-red-500 text-white px-3 py-1 rounded mb-4" onClick={logout}>
        Logout
      </button>

      <PostList />
    </div>
  );
}
