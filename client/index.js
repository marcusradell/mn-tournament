require("angular");
require("firebase");
require("angularfire");
require("angular-ui-router");

var dependencies = [
  "ui.router",
  require("./components/exp-top-nav").name,
  require("./components/exp-columnists").name,
  require("./components/exp-columnist-articles").name
];

angular.module("app", dependencies)
  .config(require("./config"));
