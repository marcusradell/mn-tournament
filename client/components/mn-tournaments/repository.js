var fn = function ($firebase, mnFirebaseRootRef) {
  var sync = $firebase(mnFirebaseRootRef.rootRef().child('tournaments'))

  var createTournament = function (name, startDate) {
    sync.$push({name: name, startDate: startDate})
  }

  var tournaments = function () {
    return sync.$asArray()
  }

  return {
    createTournament: createTournament,
    tournaments: tournaments
  }
}

module.exports = function (parentName) {
  return {
    name: parentName + 'Service',
      fn: fn
  }

}
