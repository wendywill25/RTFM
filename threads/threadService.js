var app = angular.module('rtfmApp');

app.service('threadService', function($http, $q){

var firebaseRef = new Firebase("https://wendy-rtfm.firebaseio.com/");

this.getThreads = function() {
	return new Firebase(fb.url + '/threads');
}

this.getThread = function(getThread) {
	return new Firebase(fb.url + '/threads/' + threadId);
}
getComments: function (threadId) {
    return new Firebase(fb.url + '/threads/' + threadId + '/comments');
  }


});