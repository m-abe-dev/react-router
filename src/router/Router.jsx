import { Switch, Route } from "react-router-dom";
import { PageTwo } from "../pageTwo";
import { Home } from "../home";
import { PageOneRoutes } from "./PageOneRoutes";

export const Router = () => {
  return (
    <Switch>
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
      <Route path="/pageTwo">
        <PageTwo />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
