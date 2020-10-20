import React from "react";

import { Route, Switch } from "react-router-dom";

import ProviderReducer from "./ProviderReducer";

export default function Router() {
  return (
    <Switch>
      <Route path="/agetman" component={ProviderReducer} />
    </Switch>
  );
}
