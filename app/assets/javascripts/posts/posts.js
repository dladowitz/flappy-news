//type of service object sharing persistant data across controllers
angular.module('flapperNews').factory('posts', [function(){
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
