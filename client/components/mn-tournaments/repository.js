module.exports = function ($firebase, mnFirebaseConstants, mnTournamentsStates, mnPlayersRepository, mnGroupsRepository) {
  var tournamentsSync = $firebase(new Firebase(mnFirebaseConstants.ROOT_REF).child(mnFirebaseConstants.TOURNAMENTS))

  var createTournament = function (name, startDate, maxPlayersPerGroup) {
    var tournamentId = null

    tournamentsSync.$push({
      name: name,
      startDate: startDate,
      maxPlayersPerGroup: maxPlayersPerGroup || 2,
      state: mnTournamentsStates.REGISTRATION_OPEN
    })
      .then(function onTournamentSuccess(ref) {
      tournamentId = ref.key()
      return mnPlayersRepository.createPlayersArray(tournamentId)
    }, function onTournamentError(data) {
      alert(data)
    })
      .then(function onPlayersSuccess() {
      return mnGroupsRepository.createGroupsArray(tournamentId)
    }, function onPlayersError(data) {
      alert(data)
    })
      .then(function onGroupsSuccess() {
        // Success
      }, function onGroupsError(data) {
        alert(data)
      })
  }

  var tournaments = function () {
    return tournamentsSync.$asArray().$loaded()
  }

  var tournamentById = function (id) {
    var tournament = $firebase(tournamentsSync.$ref().child(id)).$asObject().$loaded()
    return tournament
  }

  return {
    createTournament: createTournament,
    tournaments: tournaments,
    tournamentById: tournamentById
  }
}
