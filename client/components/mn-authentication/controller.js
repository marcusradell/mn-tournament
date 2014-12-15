module.exports = function ($firebaseAuth, mnFirebaseConstants, mnAuthenticationRepository) {
  var vm = this
  var ref = mnFirebaseConstants.ROOT_REF
  var authObj = $firebaseAuth(ref)

  var logIn = function (email, password) {
    mnAuthenticationRepository.logIn(email, password)
  }

  var logOut = function () {
    mnAuthenticationRepository.logOut()
  }

  var authData = function () {
    return mnAuthenticationRepository.authData()
  }

  vm.logIn = logIn
  vm.logOut = logOut
  vm.authData = authData
}

