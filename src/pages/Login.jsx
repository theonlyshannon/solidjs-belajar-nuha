import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = createSignal("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username());
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} class="p-4">
      <h2 class="text-xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Masukkan nama"
        value={username()}
        onInput={(e) => setUsername(e.target.value)}
        class="border p-2 mb-2 block w-full"
      />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
        Masuk
      </button>
    </form>
  );
}
