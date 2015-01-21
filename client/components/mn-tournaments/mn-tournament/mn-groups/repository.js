var _ = require('lodash')
var Firebase = require('firebase')

module.exports = function ($firebase, mnFirebaseConstants, mnPlayersRepository) {
  var groupsSync = $firebase(new Firebase(mnFirebaseConstants.ROOT_REF).child(mnFirebaseConstants.GROUPS))

  var createGroupsArray = function (tournamentId) {
    return groupsSync.$set(tournamentId, false)
  }

  var createGroup = function(groupsArray, playersArray, playerNames, tier, parentGroupId) {
    groupsArray.$inst().$push({
      players: playerNames,
      games: generateGames(playerNames),
      tier: tier || 0,
      parentGroupId: parentGroupId || 0
    }).then(function onSuccess(ref) {
      // TODO: Continue promise-chain when setPlayers return a promise.
      mnPlayersRepository.setPlayersIsAssignedToGroup(playersArray, playerNames, true)
    }, function onError(data) {
      alert(data)
    })
  }

  var generateGames = function (playerNames) {
    if(playerNames.length < 2) {
      throw new Error('Cannot generate games with less than two players in a group.')
    }

    var games =  []

    for(var i = 0; i < playerNames.length - 1; i++) {
      for(var j = i + 1; j < playerNames.length; j++) {
        games.push({
          redPlayer: playerNames[i],
          bluePlayer: playerNames[j],
          redScore: '-',
          blueScore: '-'
        })
      }
    }

    return games
  }

  // TODO: Implement.
  var updateScore = function(groupsArray, gameId) {

  }

  // TODO: Implement.
  var removeGroup = function (groupsArray, groupId) {

  }

  var getGroupsArrayByTournamentId = function (tournamentId) {
    debugger;
    return $firebase(groupsSync.$ref().child(tournamentId)).$asArray().$loaded()
  }

  return {
    createGroup: createGroup,
    removeGroup: removeGroup,
    createGroupsArray: createGroupsArray,
    getGroupsArrayByTournamentId: getGroupsArrayByTournamentId
  }
}
