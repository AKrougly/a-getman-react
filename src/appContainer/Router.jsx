import React from "react";

import {
  // See https://reacttraining.com/react-router/web/guides/quick-start for details
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import About from "./about/scripts/Router";
import AGetMan from "./agetman/Router";
import ACalculator from "./acalculator/Router";

const ROUTES = [
  // {path: '', component: RouterComponent, [exact]}
  { path: "/about", component: About, },
  { path: "/agetman", component: AGetMan, exact: true, },
  { path: "/acalculator", component: ACalculator, exact: true, },
];

export default function(props) {
  return (
    <Router>
      <Switch>
        {ROUTES.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Redirect to="/agetman" />
      </Switch>
    </Router>
  );
}
