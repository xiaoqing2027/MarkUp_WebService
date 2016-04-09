/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */
var bcrypt = require('bcrypt')

var createUserAuth = function(req, res, user_type, next) {
  var params = req.params.all();

  if (params.email === undefined || params.password === undefined) {
    return res.badRequest({error: 'email or password not provided.'});
  }

  var userParams = {
      type: user_type,
      gender: params.gender
  };

  if(user_type === 1) {
    userParams.firstname = params.firstname;
    userParams.lastname = params.lastname;
  }

  var auth_attr = {
    email: params.email,
    password: params.password,
  }

  var auth_criteria = {
    email: params.email
  }

  waterlock.engine.findAuth(auth_criteria, function(err, user) {
    if (user)
      return res.badRequest("User already exists.");

    waterlock.engine.findOrCreateAuth(auth_criteria, auth_attr, function(err, user) {
      if (err){
        return res.status(400).json(err);
      }

      User.update(user.id, userParams).exec(function(err, updated) {
        if(err) {
          return next(err);
        } else {
          return res.ok(updated[0]);
        }
      });
    });
  });
}


module.exports = require('waterlock').waterlocked({
  register: function(req, res, next) {
    return createUserAuth(req, res, 1, next);
  },

  login: function(req, res, next) {
    var scope = require('waterlock-local-auth/lib/scope')(waterlock.Auth, waterlock.engine);
    var params = req.params.all();

    if(typeof params[scope.type] === 'undefined' || typeof params.password !== 'string'){
      waterlock.cycle.loginFailure(req, res, null, {error: 'Invalid '+scope.type+' or password.'});
    }else{
      var pass = params.password;
      scope.getUserAuthObject(params, req, function(err, user){
        if (err) {
          if (err.code === 'E_VALIDATION') {
            return res.status(400).json('input failed validation.');
          } else {
            return res.serverError(err);
          }
        }
        if (user) {
          if(bcrypt.compareSync(pass, user.auth.password)){
            delete user.auth;
            waterlock.cycle.loginSuccess(req, res, user);
          } else {
            waterlock.cycle.loginFailure(req, res, user, {error: 'Invalid ' + scope.type + ' or password'});
          }
        } else {
          waterlock.cycle.loginFailure(req, res, null, {error: 'user not found'});
        }
      });
    }

  },

  revoke_token: function(req, res) {
    var token = req.headers.access_token;

    Jwt.update({token: token}, {revoked: true}).exec(function(err, updated){
      if (err) {
        return res.serverError(err);
      }
      return res.status(200).json({info: "Token revoked."});
    });
  }

  // reset: use default reset handler from waterlock-local-auth

});
