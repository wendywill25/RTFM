app.controller("threadCtrl", function($scope) {

	angular.module('rtfmApp')

.controller('threadCtrl', function ($scope, threadRef, commentsRef, $firebaseObject, $firebaseArray) {
    var thread = $firebaseObject(threadRef)

    thread.$bindTo($scope, 'thread');

    $scope.comments = $firebaseArray(commentsRef);

    $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      });
    };
  });