var _ = require('lodash')
var MnTier = require('./mn-tier/model')

var currentTierId = 1

var Model = function(id, name) {
  if(!(this instanceof Model)) {
    return new Model(id, name)
  }

  this._id = id
  this._name = name || id
  this._tiers = []
  this.addTier()
}

Model.prototype.id = function () {
  return this._id
}

Model.prototype.name = function (value) {
  if(!arguments.length) {
    return this._name
  }

  this._name = value
}

Model.prototype.tiers = function () {
  return this._tiers
}

Model.prototype.addPlayer = function(playerName) {
  if(!this.isNameUnique(playerName)) {
    throw new Error('Player name is already taken.')
  }

  this.tiers()[0].addPlayer(playerName)
}

Model.prototype.addTier = function () {
  this.tiers().push(new MnTier(currentTierId, 4))
}

Model.prototype.isNameUnique = function (playerName) {
  return this.tiers()[0].isNameUnique(playerName)
}

module.exports = Model
