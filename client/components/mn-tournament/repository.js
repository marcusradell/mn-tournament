module.exports = function ($firebase, mnFirebaseConstants, mnTournamentStates, mnPoolRepository, mnGroupsRepository) {
  var tournamentsSync = $firebase(new Firebase(mnFirebaseConstants.ROOT_REF).child(mnFirebaseConstants.TOURNAMENTS))

  var createTournament = function (name, startDate, maxPlayersPerGroup) {
    var tournamentId = null

    tournamentsSync.$push({
      name: name,
      startDate: startDate,
      maxPlayersPerGroup: maxPlayersPerGroup || 2,
      state: mnTournamentStates.REGISTRATION_OPEN
    })
      .then(function onTournamentSuccess(ref) {
      tournamentId = ref.key()
      return mnPoolRepository.createPool(tournamentId)
    }, function onTournamentError(data) {
      alert(data)
    })
      .then(function onPoolSuccess() {
      return mnGroupsRepository.createGroupsArray(tournamentId)
    }, function onPoolError(data) {
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
