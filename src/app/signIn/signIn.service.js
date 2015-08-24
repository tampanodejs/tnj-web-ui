/**
 * @module signInService
 * @file service to sign in / sign up
 */
angular.module('tnj.signIn')
  .service('signInService', signInServiceImpl);

/**
 * @method signInServiceImpl
 * @description service implementation
 * @param {function} $http
 * @param {object} endpoints
 * @param {object} environment
 */
function signInServiceImpl($http, endpoints, environment) {
  'use strict';

  /**
   * @description service contract
   */
  return {
    signIn: signIn,
    signUp: signUp
  };

  /**
   * @method signIn
   * @description signs in a user
   * @param {object} user
   * @returns {promise}
   */
  function signIn(user) {
    var request = {
      method: 'POST',
      url: environment.API_PATH + endpoints.USER_SIGN_IN,
      data: user
    };

    return $http(request);
  }

  /**
   * @method signUp
   * @description creates user account / signs in
   * @param {object} user
   * @returns {promise}
   */
  function signUp(user) {
    var request = {
      method: 'POST',
      url: environment.API_PATH + endpoints.USER_SIGN_UP,
      data: user
    };

    return $http(request)
      .then(function(response) {
        return response.data;
      });
  }
}
