module.exports = function() {
  var vm = this;

  var links = [
    {
      name: "Start",
      state: "start"
    },
    {
      name: "Krönikörer",
      state: "columnists"
    }
  ];

  vm.links = links;
};
