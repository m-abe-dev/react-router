import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/pageOne">PageOne</Link>
        <br />
        <Link to="/pageTwo">PageTwo</Link>
      </div>
      {/* Switchでどのパスでどのコンポーネントを出すのか決める */}
      <Router />
    </BrowserRouter>
  );
}
