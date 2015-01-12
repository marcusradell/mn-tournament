module.exports = function (mnAuthenticationRepository) {
  var vm = this

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

