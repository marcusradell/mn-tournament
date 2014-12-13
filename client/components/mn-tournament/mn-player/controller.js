var fn = function () {
  var vm = this

  var name = function () {
    return this.mnModel.name()
  }

  vm.name = name
}

module.exports = function (parentName) {
  return {
    name: parentName + 'Controller',
    fn: fn
  }
}
