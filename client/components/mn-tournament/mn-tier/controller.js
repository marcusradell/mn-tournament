var fn = function () {
  var vm = this

  var groups = function () {
    return vm.mnModel.groups()
  }

  vm.groups = groups
}

module.exports = function (parentName) {
  return {
    name: parentName + 'Controller',
    fn: fn
  }
}

