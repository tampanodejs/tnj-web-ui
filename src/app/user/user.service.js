/**
 * @module userService
 * @file user related operations
 */
angular.module('tnj.user')
  .service('userService', userServiceImpl);

/**
 * @method userServiceImpl
 * @description service implementation
 * @param {function} $http
 * @param {object} environment
 * @param {object} endpoints
 */
function userServiceImpl($http, environment, endpoints) {
  'use strict';

  var _selectedUser = null;
  var _users = [];

  /**
   * @description service contract
   */
  return {
    add: add,
    getSelectedUser: getSelectedUser,
    setSelectedUser: setSelectedUser,
    loadAllUsers: loadAllUsers,
    findFitnessActivities: findFitnessActivities
  };

  function findFitnessActivities(userName) {
    var request = {
      method: 'GET',
      url: 'http://localhost:7200/api/runkeeper/runners/fitness_activities?user_name=' + userName
    };

    return $http(request);
  }

  /**
   * @method loadAllUsers
   * @description gets all users
   * @returns {*}
   */
  function loadAllUsers() {
    var request = {
      method: 'GET',
      url: environment.API_PATH + endpoints.USERS
    };

    return $http(request)
      .then(function(response) {
        _users = response.data;
        return _users;
      });
  }

  /**
   * @method add
   * @description mock save a user by adding to array
   *  this does not refresh the side nav
   * @param {object} user
   */
  function add(user) {
    _users.push(user);
  }

  /**
   * @method setSelectedUser
   * @description set the currently selected user
   * @param {object} user
   */
  function setSelectedUser(user) {
    _selectedUser = user;
  }

  /**
   * @method getSelectedUser
   * @description return the currently selected user
   */
  function getSelectedUser() {
    return _selectedUser;
  }
}
