'use strict';

app.controller('loginCtrl', function($scope, AuthFactory) {
  $scope.submitLogin = function(){
    AuthFactory.login($scope.user.email, $scope.user.password);
  };
});
