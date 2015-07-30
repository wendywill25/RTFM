var app = angular.module('rtfmApp', ["ngRoute", "firebase"])

app.constant('fb', {
  url: "https://wendy-rtfm.firebaseio.com/"
});

app.config(function($routeProvider){

$routeProvider
  .when('/threads', {
  	templateUrl: 'threads/threads.html',
  	controller: 'threadsCtrl'
    resolve: {
      threadsRef: function($route, threadService) {
        return threadService.getThreads();
      }
  })
  .when('/threads/:threadId', {
  	templateUrl: 'threads/threads.html',
  	controller: 'threadsCtrl'
    commentsRef: function (threadService, $route) {
    return threadService.getComments($route.current.params.threadId);
  }
  })
  .when('threads/:threadId', {
  templateUrl: 'views/thread.html',
  controller: 'threadCtrl',
  resolve: {
    threadRef: function (threadService, $route) {
      return threadService.getThread($route.current.params.threadId);
      }
    }
  });
  .otherwise({
  	redirectTo: '/threads'
  })
});