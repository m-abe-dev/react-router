import { Switch, Route } from "react-router-dom";
import { Home } from "../home";
import { PageOneRoutes } from "./PageOneRoutes";
import { PageTwoRoutes } from "./PageTwoRoutes";
import { Page404 } from "../page404";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* switchのなかでrouteにあったものを表示していく */}
      <Route
        path="/pageOne"
        render={({ match: { url } }) => (
          <Switch>
            {PageOneRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/pageTwo"
        render={({ match: { url } }) => (
          <Switch>
            {PageTwoRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
