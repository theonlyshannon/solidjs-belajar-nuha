// App.jsx
import { Router, Route } from "@solidjs/router";
import Layout from "./pages/Layout";
import ToDo from "./pages/ToDo";
import AgGrid from "./pages/AgGrid";
import Post from "./pages/Post";
import Counter from "./pages/Counter";
import AmChart from "./pages/AmChart";
const Home = () => <div class="text-2xl font-bold">Selamat Datang di Aplikasi Kami</div>;

export default function App() {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <Route path="/" component={Home} />
        <Route path="/todo" component={ToDo} />
        <Route path="/ag-grid" component={AgGrid} />
        <Route path="/posts" component={Post} />
        <Route path="/counter" component={Counter} />
        <Route path="/am-chart" component={AmChart} />
      </Route>
    </Router>
  );
}
