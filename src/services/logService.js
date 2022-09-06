import Raven from "raven-js";

function init() {
  Raven.config(
    "https://1a6c8bf94b764b9490df8f436fc485b2@o1392826.ingest.sentry.io/6714354"
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
