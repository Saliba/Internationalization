'use strict';

/**
 * @ngdoc function
 * @name internationalizationApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the internationalizationApp
 */
angular.module('internationalizationApp')
  .controller('headerCtrl', function ($scope, gettextCatalog) {
    $scope.language = window.navigator.userLanguage || window.navigator.language;

    $scope.$watch('language' ,function(){
    	gettextCatalog.setCurrentLanguage($scope.language);
 	});
  });
