import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Raven from "raven-js";

Raven.config(
  "https://1a6c8bf94b764b9490df8f436fc485b2@o1392826.ingest.sentry.io/6714354"
).install();
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
