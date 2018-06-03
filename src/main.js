import registerServiceWorker from "./registerServiceWorker";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Router, Route, IndexRoute, Redirect, Switch } from "react-router";
import "./style/reset.css";
import { Layout, notification, Icon } from "antd";
import "./style/app.less";
import { AppContainer } from "react-hot-loader";
import App from "./views/app.js";
import About from "./views/about.js";
import Home from "./views/home.js";
import Hot from "./views/Hot.js";
import Other from "./views/other.jsx";
const routes = (
  <AppContainer>
    <HashRouter>
      <Switch>
        <div className="main">
          <Route exact={true} path="/" component={App} />
          <Route path="/About" render={() => About} />
          <Route path="/Home" render={() => Home} />
          <Route path="/hot" render={() => Hot} />
        </div>
      </Switch>
    </HashRouter>
  </AppContainer>
);
ReactDOM.render(
  <div style={{ width: "100%", height: "100%" }}>{routes}</div>,
  document.getElementById("root")
);
registerServiceWorker();
