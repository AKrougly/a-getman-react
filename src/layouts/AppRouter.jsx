import React from "react";

import {
  // See https://reacttraining.com/react-router/web/guides/quick-start for details
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import ThemeWrapper from "./ThemeWrapper";
import ErrorWrapper from "./ErrorWrapper";
import NotifyWrapper from "./NotifyWrapper";
import AMain from "./amain/views/Page";
import ACalculator from "./acalculator/ProviderReducer";
import APalette from "./apalette/container/Container";
import About from "./about/Router";

const routeList = [
  // {path: '', component: RouterComponent, [exact]}
  { path: "/", component: AMain, exact: true, },
  { path: "/acalculator", component: ACalculator, exact: true, },
  { path: "/apalette", component: APalette, exact: true, },
  { path: "/about", component: About, },
];

//const AppRouter = (): JSX.Element => {
class AppRouter extends React.Component {
  render() {
    //console.log('props:'+JSON.stringify(this.props));
    return (
      <ThemeWrapper palette={this.props.palette}>
        <ErrorWrapper>
          <NotifyWrapper>
            <Router>
              <Switch>
                {routeList.map((route, i) => (
                  <Route
                    key={i}
                    render={(props) => <route.component {...this.props}/>}
                    path={route.path}
                    exact={route.exact}
                  />
                ))}
                <Redirect to="/" />
              </Switch>
            </Router>
          </NotifyWrapper>
    		</ErrorWrapper>
      </ThemeWrapper>
    );
  }
}

export default AppRouter;