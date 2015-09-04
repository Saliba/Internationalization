'use strict';

/**
 * @ngdoc overview
 * @name internationalizationApp
 * @description
 * # internationalizationApp
 *
 * Main module of the application.
 */
angular
  .module('internationalizationApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'gettext'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('internationalizationApp').run(function (gettextCatalog) {
  gettextCatalog.setCurrentLanguage(window.navigator.userLanguage || window.navigator.language);
  gettextCatalog.debug = true;
});
