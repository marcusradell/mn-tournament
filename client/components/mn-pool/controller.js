var Model = require('./repository')
var moment = require('moment')

var fn = function (mnPlayersService) {
  var vm = this

  var model = new Model(moment().format('YYYY-MM-DD hh:mm'))

  var registerPlayer = function(playerName) {
    try {
      model.registerPlayer(playerName)
    }
    catch(e) {
      alert(e)
    }
  }

  var checkInPlayer = function (playerId) {
    model.checkInPlayer(playerId)
  }

  var removePlayer = function (playerId) {
    model.removePlayer(playerId)
  }

  var closeRegistration = function () {
    model.closeRegistration()
  }

  var name = function () {
    return model.name()
  }

  var players = function () {
    return model.players()
  }

  vm.registerPlayer = registerPlayer
  vm.checkInPlayer = checkInPlayer
  vm.removePlayer = removePlayer
  vm.closeRegistration = closeRegistration
  vm.name = name
  vm.players = players
}

module.exports = function (parentName) {
  return {
    name: parentName + 'Controller',
    fn: fn
  }
}

