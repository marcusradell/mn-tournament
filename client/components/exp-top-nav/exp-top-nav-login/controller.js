module.exports = function() {
  var vm = this;

  var links = [
    {
      name: "Logga in",
      state: "login"
    },
    {
      name: "Logga ut",
      state: "logout"
    }
  ];

  vm.links = links;
};
