/**
 * @module app
 * @file define the app module
 */
angular.module('tnj', [
  /* angular */
  'ngAnimate',
  'ngSanitize',
  /* vendor */
  'ngMaterial',
  'ngMdIcons',
  'ui.router',
  /* app */
  'tnj.templates',
  'tnj.common',
  'tnj.util',
  'tnj.layout',
  'tnj.loading',
  'tnj.dash',
  'tnj.user'
]);
