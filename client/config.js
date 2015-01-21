var fs = require('fs')

module.exports = function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('tournaments')

  $stateProvider
    .state('tournaments', {
      url: '/tournaments',
      template: fs.readFileSync(__dirname + '/ui-views/tournaments/template.html')
    })
    .state('tournamentDetail', {
      url: '/tournaments/:id',
      template: fs.readFileSync(__dirname + '/ui-views/tournamentDetail/template.html'),
      controller: require('./ui-views/tournamentDetail/controller'),
      controllerAs: 'vm'
    })
    .state('authentications', {
      url: '/authentications',
      template: fs.readFileSync(__dirname + '/ui-views/authentications/template.html')
    })
    .state('groups', {
      url: '/groups/:id',
      template: fs.readFileSync(__dirname + '/ui-views/groups/template.html'),
      controller: require('./ui-views/groups/controller'),
      controllerAs: 'vm'
    })
    .state('group', {
      url: '/group/:mnTournamentId/:mnGroupId',
      template: fs.readFileSync(__dirname + '/ui-views/group/template.html'),
      controller: require('./ui-views/group/controller'),
      controllerAs: 'vm'
    })
    .state('players', {
      url: '/players/:id',
      template: fs.readFileSync(__dirname + '/ui-views/players/template.html'),
      controller: require('./ui-views/players/controller'),
      controllerAs: 'vm'
    })
}
