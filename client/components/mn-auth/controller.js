var fn = function ($firebaseAuth, mnFirebaseRootRef) {
  var vm = this
  var ref = mnFirebaseRootRef.rootRef()
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
    _authData = false
  }

  var _authData = authObj.$getAuth()
  var authData = function () {
    return _authData
  }

  vm.logIn = logIn
  vm.logOut = logOut
  vm.authData = authData
}

module.exports = function (parentName) {
  return {
    name: parentName + 'Controller',
    fn: fn
  }
}
