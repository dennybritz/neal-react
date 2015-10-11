import React from "react";
import ReactDOM from "react-dom";
import SampleApp from "./samples/sample-app.jsx";
import { Router, IndexRoute, Route, Link, Redirect } from "react-router";
import SamplePage from "./samples/sample-page.jsx";
import history from "./helpers/history";

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={SampleApp}>
      <IndexRoute name="home" component={SamplePage}/>
      <Route path="*" component={SamplePage}/>
    </Route>
  </Router>
), document.getElementById("main"));
