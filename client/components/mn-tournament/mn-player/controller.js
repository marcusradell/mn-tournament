var fn = function () {
  var vm = this

  var name = function () {
    return this.mnModel.name()
  }

  var isCheckedIn = function () {
    return this.mnModel.isCheckedIn()
  }

  vm.name = name
  vm.isCheckedIn = isCheckedIn
}

module.exports = function (parentName) {
  return {
    name: parentName + 'Controller',
    fn: fn
  }
}
