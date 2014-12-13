var _ = require('lodash')
var MnGroup = require('../mn-group/model')

var currentGroupId = 1

var Model = function(id, maxPlayersPerGroup) {
  if(!(this instanceof Model)) {
    return new Model()
  }

  this.MAX_PLAYERS_PER_GROUP = maxPlayersPerGroup
  this._id = id
  this._groups = []
}

Model.prototype.id = function () {
  return this._id;
}

Model.prototype.groups = function () {
  return this._groups
}

Model.prototype.addPlayer = function(playerName) {
  var group =_.find(this.groups(), function (group) {
    return group.emptySlots()
  })

  if(!group) {
   group = this.addGroup()
  }

  group.addPlayer(playerName)
}

Model.prototype.addGroup = function () {
  var group = new MnGroup(currentGroupId, this.MAX_PLAYERS_PER_GROUP)
  currentGroupId += 1
  this.groups().push(group)

  return group
}

Model.prototype.isNameUnique = function (playerName) {
  var isNameDuplicate = _.any(this.groups(), function (group) {
    return !group.isNameUnique(playerName)
  })

  return !isNameDuplicate
}

module.exports = Model
