import { createContext, useContext, createSignal } from "solid-js";

const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = createSignal(null);

  const login = (username) => {
    setUser({ name: username });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
