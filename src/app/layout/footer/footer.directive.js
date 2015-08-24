/**
 * @module meanFooter
 * @file footer directive
 */
angular.module('tnj.layout')
    .directive('meanFooter', footerDef)
    .controller('FooterCtrl', FooterCtrl);

/**
 * @method footerDef
 * @description directive definition
 * @returns {{
 *  restrict: string, scope: {}, templateUrl: string,
 *  replace: boolean, controller: string, controllerAs: string,
 *  bindToController: boolean
 * }}
 */
function footerDef() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'layout/footer/footer.tpl.html',
    replace: true,
    controller: 'FooterCtrl',
    controllerAs: 'footerCtrl',
    bindToController: true
  };
}

/**
 * @class FooterCtrl
 * @constructor
 * @param {object} app
 * @param {object} environment
 */
function FooterCtrl(app, environment) {
  'use strict';

  var vm = this;
  vm.message = app.NAME + ' - ' + environment.VERSION;
}
