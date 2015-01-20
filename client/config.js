var fs = require("fs")

module.exports = function ($stateProvider, $urlRouterProvider) {
  var defaultState = "start";

  $urlRouterProvider.otherwise(defaultState);

  var states = [
    defaultState
  ];

  var viewPath = __dirname + "/ul-views/"

  for(var i = 0; i < states.length; i++) {
    $stateProvider.state(states[i], {
      url: "/" + states[i],
      template: fs.readFileSync(viewPath + states[i] + "/template.html",
      controller: require(viewPath + states[i]  + "controller"),
      controllerAs: "vm"
    });
  }
