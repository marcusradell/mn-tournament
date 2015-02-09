var fs = require("fs");

module.exports = function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("start");

  $stateProvider.state("start", {
    url: "/start",
    template: fs.readFileSync(__dirname + "/ui-views/start/view.html"),
    controller: require("./ui-views/start/controller"),
    controllerAs: "vm"
  });
};
