/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {
  // schema: true,
  attributes: {
    email:              { type: 'string', required: true, unique:true /*isEmail: true*/ },
    encryptedPassword:  { type: 'string' },
    nickname:           { type: 'string', required: true },
    name:               { type: 'string' },
    firstName:          { type: 'string' },
    referenceCode:      { type: 'string' },
    gender:             { type: 'number' },
    mobile:             { type: 'number' },
    address:            { type: 'string' },
    zipCode:            { type: 'number' },
    city:               { type: 'string' },
    message:            { type: 'string' },
    lat:                { type: 'string' },
    long:               { type: 'string' },
    state:              { type: 'number', required: true }, // 1 waiting sms - 2 as account validated - 0 Disabled
    profile: {
      model: 'profile'
    },
    referenceUser: {
      collection: 'user',
      via: 'referred'
    },
    referred: {
      collection: 'user',
      via: 'referenceUser'
    },
  },

  customToJSON: function () {
    return _.omit(this, ['encryptedPassword']) // Never return password
  },

  beforeCreate: function (values, next) { // Function bcrypt password before create user
    bcrypt.genSalt(10, function (err, salt) {
      if(err) 
        return next(err);
      bcrypt.hash(values.password, salt, function (err, hash) {
        if(err)
          return next(err);
        values.encryptedPassword = hash;
        delete values.password;
        return next();
      })
    })
  },
  comparePassword: function (password, user, callback) {
    bcrypt.compare(password, user.encryptedPassword, function (err, match) {
      if(err) 
        return callback(false);
      if(match) {
        return callback(true);
      } else {
        return callback(false);
      }
    })
  }
};
