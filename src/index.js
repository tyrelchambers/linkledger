import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./routes/index.routes";
import Index from "./pages/Index/Index";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Index} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
