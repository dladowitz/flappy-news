//type of service object sharing persistant data across controllers
angular.module('flapperNews').factory('posts', ['$http', function($http){
  var o = {
    posts: []
  };

  //Gets posts via json call. Overights posts
  o.getAll = function(){
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
    });
  };

  // Create a post and push via json
  o.create = function(post){
    return $http.post('/posts.json', post).success(function(data){
      o.posts.push(data);
    });
  };

  // Upvote
  o.upvote = function(post){
    $http.post('/posts/' + post.id + '/upvote.json').success(function(data){
      post.upvotes += 1;
    })
  }
  return o;
}]);
