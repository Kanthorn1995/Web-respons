import React from "react";
import { Switch, Route } from "react-router-dom";
import Blog from "../../containers/Blog";
import Category from "../../containers/Category";
import Contactus from "../../containers/ContactUs";
import Homepage from "../../containers/HomePage";
// import Page404 from "../pages/Page404";

const Routers = () => {
  return (
    <Switch>
      <Route exact component={Homepage} path="/"></Route>
      <Route component={Category} path="/category"></Route>
      <Route component={Blog} path="/blog"></Route>
      <Route component={Contactus} path="/contactus"></Route>

      {/* <Route path="*">
        <Page404 />
      </Route> */}
    </Switch>
  );
};

export default Routers;
