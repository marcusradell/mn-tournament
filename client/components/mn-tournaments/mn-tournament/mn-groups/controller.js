var _ = require('lodash')

module.exports = function (mnGroupsRepository, mnPlayersRepository) {
  var vm = this

  var createGroup = function (playerNames) {
    mnGroupsRepository.createGroup(vm.groups, vm.players, playerNames)

    clearSelectedPlayerNames()
  }

  var clearSelectedPlayerNames = function () {
    while(vm.selectedPlayerNames.length > 0) {
      vm.selectedPlayerNames.pop()
    }
  }

  var setPlayerIsAssignedToGroup = function (playerName, isAssignedToGroup) {
    mnPlayersRepository.setPlayerIsAssignedToGroup(vm.mnTournamentId, playerName, isAssignedToGroup)
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

  var availablePlayers = function (players) {
    return _.where(players, function (player) {
      return isPlayerAvailable(player)
    })
  }

  vm.groups = null
  vm.players = null
  vm.selectedPlayerNames = []
  vm.isPlayerAvailable = isPlayerAvailable
  vm.availablePlayers = availablePlayers
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

    mnPlayersRepository.getPlayersById(vm.mnTournamentId).then(function onSuccess(data) {
      vm.players = data
    }, function onError(data) {
      alert(data)
    })
  }())
}
