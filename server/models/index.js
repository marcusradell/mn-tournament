var _ = require("lodash");
var Promise = require("bluebird");
var request = Promise.promisify(require("request"));

function getColumnists() {
  request.get("http://ursula1.expressen.se/main-column/32c6bd7c-209f-4ea8-8093-7597a0b9815d").then(function(body) {

  });
}

module.exports = {
  getColumnists: getColumnists
};
