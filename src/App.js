import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./home";
import { PageOne } from "./pageOne";
import { PageTwo } from "./pageTwo";
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
      <Switch>
        {/* switchのなかでrouteにあったものを表示していく */}
        <Route exact path="/pageOne">
          <PageOne />
        </Route>
        <Route path="/pageTwo">
          <PageTwo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
