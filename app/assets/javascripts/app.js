flapperNews = angular.module('flapperNews', ['ui.router']);

//Config contains $stateProvider and $urlRouter Provider
flapperNews.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  //maps ui-views, urls, templates and controllers
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: '/home.html',
    controller: 'MainCtrl'
  })
  .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

  //maps urls to states
  $urlRouterProvider.otherwise('home');
}]);

//type of service object sharing persistant data across controllers
flapperNews.factory('posts', [function(){
  var o = {
    posts: [{
              title: 'Tigers', link: "http://www.google.com", upvotes: 10,
              comments: [
                          {author: 'Hobbes', body: 'Tigers take over the world', upvotes: 20},
                          {author: 'Calvin', body: 'Children learn to ride tigers as transportation', upvotes: 23}
                        ]
            },
            {
              title: 'Lions', link: "http://www.google.com", upvotes: 12,
              comments: [
                          {author: 'Hobbes', body: 'Tigers take over the world', upvotes: 20},
                          {author: 'Calvin', body: 'Children learn to ride tigers as transportation', upvotes: 23}
                        ]
            }]
  };
  return o;
}]);

//Sets up two way data binding with the browser. We pass in the posts factory for use.
flapperNews.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
  //Functions
  $scope.addPost = function(){
    if (!$scope.title || $scope.title === ''){
      return
    }

    $scope.posts.push({
      title: $scope.title, upvotes: 0, link: $scope.link,
      comments: [
        {author: 'Hobbes', body: 'Tigers take over the world', upvotes: 20},
        {author: 'Calvin', body: 'Children learn to ride tigers as transportation', upvotes: 23}
      ]
    });
    $scope.title = '';
    $scope.link = '';
  };

  $scope.upvote = function(post){
    post.upvotes += 1;
  }

  //Run on load
  $scope.pageTitle = "Flapper News";

  $scope.posts = posts.posts;
}]);

//We pass in the posts factory for use.
flapperNews.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts){
  $scope.addComment = function(){
    console.log("adding comment");
    if ($scope.body === '' || !$scope.body){
      return;
    } else {
      $scope.post.comments.push({
        author: 'user',
        body: $scope.body,
        upvotes: 0
      })
    }

    $scope.body = '';
  }

  $scope.post = posts.posts[$stateParams.id]
}]);
