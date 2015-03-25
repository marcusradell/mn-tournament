var Firebase = require('firebase')
var _ = require('lodash')

module.exports = function ($firebase, $q, mnFirebaseConstants) {
  var playersSync = $firebase(new Firebase(mnFirebaseConstants.ROOT_REF).child(mnFirebaseConstants.PLAYERS))

  var addPlayer = function (playersArray, playerName) {
    // TODO: Use isNameUnique and promises so all names are unique.
    if(!isNameUnique(playersArray, playerName)) {
      return $q(function (resolve, reject) {
        reject('The name "' + playerName + '" was already taken.')
      })
    }

    return playersArray.$inst().$set(playerName, {
      isCheckedIn: false,
      isAssignedToGroup: false
    })
  }

  var setPlayerIsCheckedIn = function (playersArray, playerName, isCheckedIn) {
    return playersArray.$inst().$update(playerName, {
      isCheckedIn: isCheckedIn
    })
  }

  // TODO: Solve promise solution in the for-loop.
  var setPlayersIsAssignedToGroup = function (playersArray, playerNames, isAssignedToGroup) {
    for(var i = 0; i < playerNames.length; i++) {
      setPlayerIsAssignedToGroup(playersArray, playerNames[i], isAssignedToGroup)
    }
  }

  var setPlayerIsAssignedToGroup = function (playersArray, playerName, isAssignedToGroup) {
    return playersArray.$inst().$update(playerName, {
      isAssignedToGroup: isAssignedToGroup
    })
  }

  var removePlayer = function (playersArray, playerName) {
    return playersArray.$inst().$remove(playerName)
  }

  var getPlayersById = function (playersId) {
    return $firebase(playersSync.$ref().child(playersId)).$asArray().$loaded()
  }

  var isNameUnique = function (playersArray, playerName) {
    return playersArray.$indexFor(playerName) === -1
  }

  var createPlayersArray = function (tournamentId) {
    return playersSync.$set(tournamentId, false)
  }

  return {
    getPlayersById: getPlayersById,
    createPlayersArray: createPlayersArray,
    addPlayer: addPlayer,
    setPlayerIsCheckedIn: setPlayerIsCheckedIn,
    setPlayersIsAssignedToGroup: setPlayersIsAssignedToGroup,
    setPlayerIsAssignedToGroup: setPlayerIsAssignedToGroup,
    removePlayer: removePlayer
  }
}
