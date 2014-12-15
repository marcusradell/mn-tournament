var _ = require('lodash')
var MnPlayer = require('../../mn-player/model')

var Model = function(id, maxPlayers) {
  if(!(this instanceof Model)) {
    return new Model(id, maxPlayers)
  }

  this.MAX_PLAYERS = maxPlayers
  this._id = id
  this._players = []
}

Model.prototype.id = function () {
  return this._id
}

Model.prototype.players = function () {
  return this._players
}

Model.prototype.addPlayer = function(playerName) {
  if(this.emptySlots() <= 0) {
    throw new Error('Cannot add player when group is out of slots.')
  }

  this.players().push(new MnPlayer(playerName))
}

Model.prototype.isNameUnique = function (playerName) {
  var isNameUnique = !_.any(this.players(), function (player) {
    return player.name() === playerName
  })

  return isNameUnique
}

Model.prototype.emptySlots = function () {
  return this.MAX_PLAYERS - this.players().length
}

module.exports = Model
