flapperNews = angular.module('flapperNews', []);


flapperNews.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);

flapperNews.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){

  //Functions
  $scope.addPost = function(){
    if (!$scope.title || $scope.title === ''){
      return
    }

    $scope.posts.push({title: $scope.title, upvotes: 0, link: $scope.link});
    $scope.title = '';
    $scope.link = '';
  };

  $scope.upvote = function(post){
    post.upvotes += 1;
  }

  //Run on load
  $scope.pageTitle = "Flapper News";

  $scope.posts = [];
  //$scope.posts = [{title: 'Tigers', link: "http://www.google.com", upvotes: 10}];

}]);
