var Firebase = require('firebase')

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
      checkedIn: false
    })
  }

  var setPlayerCheckInStatus = function (poolArray, playerName, isCheckedIn) {
    return poolArray.$inst().$update(playerName, {
      checkedIn: isCheckedIn
    })
  }

  var removePlayer = function (poolArray, playerName) {
    return poolArray.$inst().$remove(playerName)
  }

  var getPoolById = function (poolId) {
    return $firebase(poolsSync.$ref().child(poolId)).$asArray().$loaded()
  }

  var removeAllMissingPlayers = function (poolArray) {
    throw new Error('TODO: Implement.')
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
    setPlayerCheckInStatus: setPlayerCheckInStatus,
    removePlayer: removePlayer,
    removeAllMissingPlayers: removeAllMissingPlayers
  }
}
