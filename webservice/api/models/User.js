/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({
    firstname: {
      type: 'string'
    },
    lastname: {
      type: 'string'
    },
    status: {
      defaultsTo: 1,
      type: 'string'
    },
    user_type: {
      defaultsTo: 1,
      type: 'integer'
    }
  }),
    /* e.g.
    nickname: 'string'
    */



  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
