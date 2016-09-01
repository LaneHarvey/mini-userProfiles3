angular.module('userProfiles').service('mainService', function($http, $q) {
  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response) {
      var people = response.data
      for(var i = 0; i < people.length; i++) {
        people[i].first_name = 'Ralf'
      }
      deferred.resolve(people)
    })
    return deferred.promise;
  }
});
