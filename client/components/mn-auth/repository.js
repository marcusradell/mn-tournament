module.exports = function ($firebaseAuth, mnFirebaseConstants) {
  var ref = mnFirebaseConstants.ROOT_REF
  var authObj = $firebaseAuth(ref)

  var logIn = function (email, password) {
    debugger;
    authObj.$authWithPassword({
      email: email,
      password: password
    }).then(function (authData) {
        _authData = authData
        alert(authData)
      },
      function (error) {
        alert(error)
      })
  }

  var logOut = function () {
    authObj.$unauth()
    // TODO: This should be fixed to update live, not changed manually.
    // Can the authObj be used instead? Or is the _authData field updated by firebase automatically?
    _authData = false
  }

  var _authData = authObj.$getAuth()
  var authData = function () {
    return _authData
  }

  return {
    logIn: logIn,
    logOut: logOut,
    authData: authData
  }
}
