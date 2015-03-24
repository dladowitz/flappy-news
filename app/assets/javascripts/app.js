flapperNews = angular.module('flapperNews', ['ui.router', 'templates']);

//Config contains $stateProvider and $urlRouter Provider
flapperNews.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  //maps ui-views, urls, templates and controllers
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'home/_home.html',
    controller: 'MainCtrl',
    resolve: {
      postPromise: ['posts', function(posts){
        return posts.getAll();
      }]
    }
  })
  .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl'
    });

  //maps urls to states
  $urlRouterProvider.otherwise('home');
}]);
