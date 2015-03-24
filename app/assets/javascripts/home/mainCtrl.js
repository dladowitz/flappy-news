
//Sets up two way data binding with the browser. We pass in the posts factory for use.
angular.module('flapperNews').controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
  //Functions
  $scope.addPost = function(){
    if (!$scope.title || $scope.title === ''){
      return
    }
    posts.create({ link: $scope.link, title: $scope.title, upvotes: 0});

    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post){
    posts.upvote(post);
  }

  //Run on load
  $scope.pageTitle = "Flapper News";

  $scope.posts = posts.posts;
}]);
