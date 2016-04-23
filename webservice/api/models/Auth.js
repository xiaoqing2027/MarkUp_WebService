/**
 * Auth
 *
 * @module      :: Model
 * @description :: Holds all authentication methods for a User
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.auth.attributes({
    email: {
      type: 'email',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      minLength: 3,
      required: true
    },
    resetToken: {
      model: 'resetToken'
    }
    // versions: {
    //   collection:'version',
    //   via: 'author'
    // }
}),

  beforeCreate: require('waterlock').models.auth.beforeCreate,
  beforeUpdate: require('waterlock').models.auth.beforeUpdate
};
