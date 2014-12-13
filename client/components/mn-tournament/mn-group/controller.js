var fn = function () {
  var vm = this

  var id = function () {
    return vm.mnModel.id()
  }

  var players = function () {
    return vm.mnModel.players()
  }

  vm.id = id
  vm.players = players
}

module.exports = function (parentName) {
  return {
    name: parentName + 'Controller',
    fn: fn
  }
}
