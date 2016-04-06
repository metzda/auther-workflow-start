'use strict';

app.factory('AuthFactory', function($http, $state){
  var factoryObj = {};
  factoryObj.signup = function(email, password) {
    $http.post('/api/users', {email: email, password: password})
    .then(function(response) {
      return $http.post('/login', response.data);
    })
    .then(function(user) {
      $state.go('stories');
    })
    .catch(function(err) {
      return err.message;
    });
  };

  factoryObj.login = function(email, password) {
    $http.post('/login', {email: email, password: password})
    .then(function() {
      $state.go('stories');
    })
    .catch(function(err) {
      return err.message;
    });
  };

  factoryObj.logout = function(){
    $http.get('/logout')
    .then(function(){
      console.log('trying to go home after logging out');
      $state.go('home');
    });
  };

  return factoryObj;

});
