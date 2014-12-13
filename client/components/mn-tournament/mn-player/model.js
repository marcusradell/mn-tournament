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

module.exports = Model
