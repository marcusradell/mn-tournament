var _ = require('lodash')

module.exports = function (mnGroupsRepository) {
  var vm = this

  var generateGroups = function() {
    // TODO: Use MAX_PLAYERS_PER_GROUP
    mnGroupsRepository.generateGroups(vm.mnTournamentId, vm.groups, vm.players, 4).then(function onSuccess() {
    }, function onError(data) {
      alert(data)
    })
  }

  vm.groups = null
  vm.players = null
  vm.generateGroups = generateGroups

  ;(function initialize() {
    mnGroupsRepository.getGroupsArrayByTournamentId(vm.mnTournamentId).then(function onSuccess(data) {
      vm.groups = data
    }, function onError(data) {
      alert(data)
    })
  }())
}
