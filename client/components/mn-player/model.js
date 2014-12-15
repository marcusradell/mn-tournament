var _ = require('lodash')

var Model = function(name) {
  if(!(this instanceof Model)) {
    return new Model(name)
  }

  if(!name) {
    throw new Error('Name cannot be empty.')
  }

  // TODO: Fix better ID solution. GUID?
  this._id = name
  this._name = name
  this._isCheckedIn = false
}

Model.prototype.name = function (value) {
  if(!arguments.length) {
    return this._name
  }

  this._name = value
}

Model.prototype.id = function () {
  return this._id
}

Model.prototype.isCheckedIn = function (value) {
  if(!arguments.length) {
    return this._isCheckedIn
  }

  this._isCheckedIn = value
}

module.exports = Model
