var Model = require('./model')
var moment = require('moment')

var fn = function () {
  var vm = this

  var model = new Model(moment().valueOf())

  var addPlayer = function(playerName) {
    try {
      model.addPlayer(playerName)
    }
    catch(e) {
      alert(e)
    }
  }

  var name = function () {
    return model.name()
  }

  var tiers = function () {
    return model.tiers()
  }

  vm.addPlayer = addPlayer
  vm.name = name
  vm.tiers = tiers
}

module.exports = function (parentName) {
  return {
    name: parentName + 'Controller',
    fn: fn
  }
}

