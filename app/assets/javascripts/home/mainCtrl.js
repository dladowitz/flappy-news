
//Sets up two way data binding with the browser. We pass in the posts factory for use.
angular.module('flapperNews').controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
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
