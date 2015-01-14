module.exports = function (mnPoolRepository) {
  var vm = this

  var addPlayer = function(playerName) {
    mnPoolRepository.addPlayer(vm.pool, playerName).then(function () {
      // success
    }, function (data) {
      alert(data)
    })
  }

  var setPlayerIsCheckedIn = function (playerName, isCheckedIn) {
    mnPoolRepository.setPlayerIsCheckedIn(vm.pool, playerName, isCheckedIn)
  }

  var removePlayer = function (playerName) {
    mnPoolRepository.removePlayer(vm.pool, playerName)
  }

  var removeAllMissingPlayers = function () {
    mnPoolRepository.removeAllMissingPlayers(vm.pool)
  }

  vm.pool = null
  vm.addPlayer = addPlayer
  vm.setPlayerIsCheckedIn = setPlayerIsCheckedIn
  vm.removePlayer = removePlayer
  vm.removeAllMissingPlayers = removeAllMissingPlayers

  ;(function initialize() {
    mnPoolRepository.getPoolById(vm.mnTournamentId).then(function (data) {
      vm.pool = data
    }, function (data) {
      alert(data)
    })
  }())
}
