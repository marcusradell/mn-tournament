var _ = require('lodash')

module.exports = function (mnGroupsRepository, mnPoolRepository) {
  var vm = this

  var createGroup = function (playerNames) {
    mnGroupsRepository.createGroup(vm.groups, vm.pool, playerNames)

    clearSelectedPlayerNames()
  }

  var clearSelectedPlayerNames = function () {
    while(vm.selectedPlayerNames.length > 0) {
      vm.selectedPlayerNames.pop()
    }
  }

  var setPlayerIsAssignedToGroup = function (playerName, isAssignedToGroup) {
    mnPoolRepository.setPlayerIsAssignedToGroup(vm.mnTournamentId, playerName, isAssignedToGroup)
  }

  var selectPlayerName = function (playerName) {
    if(isPlayerNameSelected(playerName)) {
      unselectPlayerName(playerName)
      return
    }

    vm.selectedPlayerNames.push(playerName)
  }

  var unselectPlayerName = function (playerName) {
    _.remove(vm.selectedPlayerNames, function (selectedPlayerName) {
      return playerName === selectedPlayerName
    })
  }

  var isPlayerNameSelected = function (playerName) {
    return _.any(vm.selectedPlayerNames, function (selectedPlayerName) {
      return playerName === selectedPlayerName
    })
  }

  var isPlayerAvailable = function (player) {
    return player.isCheckedIn && !player.isAssignedToGroup
  }

  vm.groups = null
  vm.pool = null
  vm.selectedPlayerNames = []
  vm.isPlayerAvailable = isPlayerAvailable
  vm.selectPlayerName = selectPlayerName
  vm.unselectPlayerName = unselectPlayerName
  vm.createGroup = createGroup
  vm.setPlayerIsAssignedToGroup = setPlayerIsAssignedToGroup

  ;(function initialize() {
    mnGroupsRepository.getGroupsArrayByTournamentId(vm.mnTournamentId).then(function onSuccess(data) {
      vm.groups = data
    }, function onError(data) {
      alert(data)
    })

    mnPoolRepository.getPoolById(vm.mnTournamentId).then(function onSuccess(data) {
      vm.pool = data
    }, function onError(data) {
      alert(data)
    })
  }())
}
