module.exports = function ($firebase, mnFirebaseConstants) {
  var sync = $firebase(mnFirebaseConstants.ROOT_REF.child('tournaments'))

  var createTournament = function (name, startDate) {
    sync.$push({name: name, startDate: startDate})
  }

  var tournaments = function () {
    return sync.$asArray()
  }

  var tournamentById = function (id) {
    return $firebase(mnFirebaseConstants.ROOT_REF.child('tournaments').child(id)).$asObject().$loaded()
  }

  return {
    createTournament: createTournament,
    tournaments: tournaments,
    tournamentById: tournamentById
  }
}
