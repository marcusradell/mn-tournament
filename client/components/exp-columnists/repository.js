function repository($http) {
  function getColumnists() {
    //return $http.get("http://ursula1.expressen.se/resolveurl/kronikorer/").then(
    return $http.get("columnists").then(
      function onSuccess(data) {
        console.log(data);
      },
      function onError(data) {
        console.error(data);
      }
    );
  }

  return {
    getColumnists: getColumnists
  };
}

module.exports = repository;
