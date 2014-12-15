var Model = require('./model')
var moment = require('moment')

module.exports = function () {
  var vm = this

  var addPlayer = function(playerName) {
    try {
      vm.mnModel.addPlayer(playerName)
    }
    catch(e) {
      alert(e)
    }
  }

  var name = function () {
    return vm.mnModel.name
  }

  var tiers = function () {
    return vm.mnModel.tiers // TODO:
  }

  vm.addPlayer = addPlayer
  vm.name = name
  vm.tiers = tiers
}
