'use strict';

app.controller('signupCtrl', function($scope, AuthFactory) {
  $scope.submitSignup = function(){
    AuthFactory.signup($scope.user.email, $scope.user.password);
  };
});
