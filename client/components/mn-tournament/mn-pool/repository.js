var _ = require('lodash')
var MnPlayer = require('../mn-player/model')

var Model = function(id) {
  if(!(this instanceof Model)) {
    return new Model(id)
  }

  this._id = id
  this._players = []
}

Model.prototype.id = function () {
  return this._id
}

Model.prototype.players = function () {
  return this._players
}

Model.prototype.registerPlayer = function(playerName) {
  if(!this.isNameUnique(playerName)) {
    throw new Error('Player name is already taken.')
  }

  this.players().push(new MnPlayer(playerName))
}

Model.prototype.findPlayerById = function (playerId) {
  return _.find(this.players(), function (player) {
    return player.id() === playerId
  })
}

Model.prototype.checkInPlayer = function (playerId) {
  var player = this.findPlayerById(playerId)

  if(player.isCheckedIn()) {
    throw new Error('The player is already checked in.')
  }

  player.isCheckedIn(true)
}

Model.prototype.removePlayer = function (playerId) {
  _.remove(this.players(), function (player) {
    return player.id() === playerId
  })
}

Model.prototype.closeRegistration = function() {
  _.remove(this.players(), function (player) {
    return !player.isCheckedIn()
  })
}

Model.prototype.isNameUnique = function (playerName) {
  var isNameUnique = !_.any(this.players(), function (player) {
    return player.name() === playerName
  })

  return isNameUnique
}

module.exports = Model
