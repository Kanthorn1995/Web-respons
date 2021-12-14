import React from "react";
import { createBrowserHistory } from "history";

import App from "./App";
import { Router, Switch, Route } from "react-router-dom";
// import Page404 from "../src/containers/page404";
const customHistory = createBrowserHistory();
const Root = () => {
  return (
    <div>
      <Router history={customHistory}>
        <Switch>
          <Route component={App} />
          {/* <Route component={Page404} path="*" /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default Root;
