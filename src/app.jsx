import { createSignal, createEffect } from "solid-js";

function App() {
  // 1. State counter
  const [count, setCount] = createSignal(0);

  // 2. Logging setiap kali count berubah
  createEffect(() => {
    console.log("Counter sekarang:", count());
  });

  // 3. UI
  return (
    <div style={{ "text-align": "center", "margin-top": "50px" }}>
      <h1>Counter Reaktif SolidJS</h1>
      <p style={{ "font-size": "24px" }}>Nilai Counter: {count()}</p>

      <button onClick={() => setCount(count() - 1)} style={{ margin: "10px" }}>
        -
      </button>
      <button onClick={() => setCount(count() + 1)} style={{ margin: "10px" }}>
        +
      </button>
    </div>
  );
}

export default App;
