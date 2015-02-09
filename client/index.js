require("angular");
require("firebase");
require("angularfire");
require("angular-ui-router");

var dependencies = [
  "ui.router",
  require("./components/exp-top-nav").name
];

angular.module("app", dependencies)
  .config(require("./config"));
