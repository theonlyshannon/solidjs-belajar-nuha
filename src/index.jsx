/* @refresh reload */
import { render } from "solid-js/web";
import { HopeProvider } from "@hope-ui/solid"; // Tambahkan ini
import "./index.css";
import App from "./App";

// Bungkus <App /> dengan <HopeProvider>
render(
  () => (
    <HopeProvider>
      <App />
    </HopeProvider>
  ),
  document.getElementById("root")
);
