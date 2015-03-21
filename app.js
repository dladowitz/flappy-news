angular.module('flapperNews', []).controller('MainCtrl', ['$scope', function($scope){

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

  $scope.posts = [
    {title: 'post 1', link: "http://www.google.com", upvotes: 5},
    {title: 'post 2', link: "http://www.google.com", upvotes: 2},
    {title: 'post 3', link: "http://www.google.com", upvotes: 15},
    {title: 'post 4', link: "http://www.google.com", upvotes: 9},
    {title: 'post 5', link: "http://www.google.com", upvotes: 4}
  ];

}]);
