var _ = require('lodash')
var Firebase = require('firebase')

module.exports = function ($firebase, mnFirebaseConstants, mnPlayersRepository) {
  var groupsSync = $firebase(new Firebase(mnFirebaseConstants.ROOT_REF).child(mnFirebaseConstants.GROUPS))

  var generateGroups = function (tournamentId, playersArray, maxPlayersPerGroup) {
    var checkedInPlayers = _.where(playersArray, function isCheckedIn(player) {
      return player.isCheckedIn
    })

    var groupsData = []
    var playerNames = _.shuffle(_.pluck(playersArray,'$id'))
    var groupsCount = checkedInPlayers.length / maxPlayersPerGroup

    for(var groupIndex = 0; groupIndex < groupsCount; groupIndex++) {
      var groupPlayerNames = []

      for(var playerIndex = groupIndex; playerIndex < playerNames.length; playerIndex += groupsCount) {
        groupPlayerNames.push(playerNames[playerIndex])
      }

      groupsData.push({
        players: groupPlayerNames,
        games: generateGames(groupPlayerNames)
      })
    }
    debugger;
    groupsSync.$set(tournamentId, false).then(function onCreateGroupsArraySuccess() {
      for(var i = 0; i < groupsData.length; i++) {
        getGroupsArrayByTournamentId(tournamentId).then(function onGetGroupsSuccess(data) {
          data.$push(groupsData[i])
        }, function onGetGroupsError(data) {
          alert(data)
        })
      }
    }, function onCreateGroupsArrayError(data) {
      alert(data)
    })
  }

  /*var createGroup = function(groupsArray, playersArray, playerNames, tier, parentGroupId) {
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
  }*/

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

    return _.shuffle(games)
  }

  // TODO: Implement.
  var updateScore = function(groupsArray, gameId) {

  }

  var getGroupsArrayByTournamentId = function (tournamentId) {
    return $firebase(groupsSync.$ref().child(tournamentId)).$asArray().$loaded()
  }

  return {
    generateGroups: generateGroups,
    getGroupsArrayByTournamentId: getGroupsArrayByTournamentId
  }
}
