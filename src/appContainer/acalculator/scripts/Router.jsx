import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./views/Home";

export default function AboutRouter() {
  return (
    <Switch>
      <Route path="/acalculator" component={Home} />
    </Switch>
  );
}
