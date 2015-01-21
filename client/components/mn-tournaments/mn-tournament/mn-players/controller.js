module.exports = function (mnPlayersRepository) {
  var vm = this

  var addPlayer = function(playerName) {
    mnPlayersRepository.addPlayer(vm.players, playerName).then(function () {
      // success
    }, function (data) {
      alert(data)
    })
  }

  var setPlayerIsCheckedIn = function (playerName, isCheckedIn) {
    mnPlayersRepository.setPlayerIsCheckedIn(vm.players, playerName, isCheckedIn)
  }

  var removePlayer = function (playerName) {
    mnPlayersRepository.removePlayer(vm.players, playerName)
  }

  vm.players = null
  vm.addPlayer = addPlayer
  vm.setPlayerIsCheckedIn = setPlayerIsCheckedIn
  vm.removePlayer = removePlayer

  ;(function initialize() {
    mnPlayersRepository.getPlayersById(vm.mnTournamentId).then(function (data) {
      vm.players = data
    }, function (data) {
      alert(data)
    })
  }())
}
