/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({
    attempt:{
      collection: 'attempt',
      via:'user'
    },
    jsonWebToken:{
      collection: 'jwt',
      via:'owner'
    },
    auth:{
      model:'auth'
    }
    /* e.g.
    nickname: 'string'
    */

  }),

  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
