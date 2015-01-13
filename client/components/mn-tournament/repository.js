module.exports = function ($firebase, mnFirebaseConstants, mnTournamentStates, mnPoolRepository) {
  var tournamentsSync = $firebase(new Firebase(mnFirebaseConstants.ROOT_REF).child(mnFirebaseConstants.TOURNAMENTS))

  var createTournament = function (name, startDate, maxPlayersPerGroup) {
    tournamentsSync.$push({
      name: name,
      startDate: startDate,
      maxPlayersPerGroup: maxPlayersPerGroup || 2,
      state: mnTournamentStates.REGISTRATION_OPEN
    }).then(function (ref) {
      return mnPoolRepository.createPool(ref.key())
    }, function (data) {
      alert(data)
    }).then(function (ref) {

    }, function (data) {
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
