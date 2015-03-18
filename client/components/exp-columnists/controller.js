module.exports = function(expColumnistsRepository) {
  var vm = this;

  var columnists = [
    {
      name: "K-G Bergström",
      id: "54e4c2a7-92cf-2f71-3122-8c1f6b109697",
      imgUrl: "http://y.cdn-expressen.se/images/30/50/3050c1b2b05c4f229a755954b85e0291/174.jpg",
      facts: [
        {
          key: "Gör",
          value: "Journalist, pensionär, hemmansägare"
        },
        {
          key: "Född",
          value: "1945"
        }
      ]
    },
    {
      name: "C-G Bergström",
      id: "54e4c2a7-92cf-2f71-3122-8c1f6b109697",
      imgUrl: "http://y.cdn-expressen.se/images/30/50/3050c1b2b05c4f229a755954b85e0291/174.jpg",
      facts: [
        {
          key: "Gör",
          value: "Journalist, pensionär, hemmansägare"
        },
        {
          key: "Född",
          value: "1945"
        }
      ]
    }
  ];

  var data = expColumnistsRepository.getColumnists();

  vm.columnists = columnists;
  vm.data;
};
