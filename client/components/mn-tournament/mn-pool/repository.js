var Firebase = require('firebase')
var _ = require('lodash')

module.exports = function ($firebase, $q, mnFirebaseConstants) {
  var poolsSync = $firebase(new Firebase(mnFirebaseConstants.ROOT_REF).child(mnFirebaseConstants.POOLS))

  var addPlayer = function (poolArray, playerName) {
    // TODO: Use isNameUnique and promises so all names are unique.
    if(!isNameUnique(poolArray, playerName)) {
      return $q(function (resolve, reject) {
        reject('The name "' + playerName + '" was already taken.')
      })
    }

    return poolArray.$inst().$set(playerName, {
      isCheckedIn: false,
      isAssignedToGroup: false
    })
  }

  var setPlayerIsCheckedIn = function (poolArray, playerName, isCheckedIn) {
    return poolArray.$inst().$update(playerName, {
      isCheckedIn: isCheckedIn
    })
  }

  // TODO: Solve promise solution in the for-loop.
  var setPlayersIsAssignedToGroup = function (poolArray, playerNames, isAssignedToGroup) {
    for(var i = 0; i < playerNames.length; i++) {
      setPlayerIsAssignedToGroup(poolArray, playerNames[i], isAssignedToGroup)
    }
  }

  var setPlayerIsAssignedToGroup = function (poolArray, playerName, isAssignedToGroup) {
    return poolArray.$inst().$update(playerName, {
      isAssignedToGroup: isAssignedToGroup
    })
  }

  var removePlayer = function (poolArray, playerName) {
    return poolArray.$inst().$remove(playerName)
  }

  var getPoolById = function (poolId) {
    return $firebase(poolsSync.$ref().child(poolId)).$asArray().$loaded()
  }

  var isNameUnique = function (poolArray, playerName) {
    return poolArray.$indexFor(playerName) === -1
  }

  var createPool = function (tournamentId) {
    return poolsSync.$set(tournamentId, false)
  }

  return {
    getPoolById: getPoolById,
    createPool: createPool,
    addPlayer: addPlayer,
    setPlayerIsCheckedIn: setPlayerIsCheckedIn,
    setPlayersIsAssignedToGroup: setPlayersIsAssignedToGroup,
    setPlayerIsAssignedToGroup: setPlayerIsAssignedToGroup,
    removePlayer: removePlayer
  }
}
