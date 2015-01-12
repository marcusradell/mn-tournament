module.exports = function ($firebase, mnFirebaseConstants, mnTournamentStates) {
  var sync = $firebase(mnFirebaseConstants.ROOT_REF.child('tournaments'))

  var createTournament = function (name, startDate, maxPlayersPerGroup) {
    sync.$push({
      name: name,
      startDate: startDate,
      maxPlayersPerGroup: maxPlayersPerGroup || 2,
      state: mnTournamentStates.REGISTRATION_OPEN
    })
  }

  var tournaments = function () {
    return sync.$asArray()
  }

  var tournamentById = function (id) {
    var tournament = tournaments().$getRecord(id)
    return tournament
  }

  return {
    createTournament: createTournament,
    tournaments: tournaments,
    tournamentById: tournamentById
  }
}
