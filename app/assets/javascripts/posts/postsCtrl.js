//We pass in the posts factory for use.
  angular.module('flapperNews').controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts){
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
