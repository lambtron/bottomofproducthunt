
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');
var PH = wrap(db.get('ph'));
var ProductHunt = require('./producthunt');
var moment = require('moment');

/**
 * Expose `PH`.
 */

module.exports = PH;

/**
 * Get token.
 */

PH.token = function *() {
  var token = yield this.findOne({});
  if (token && moment().isBefore(token.expiresAt)) return token.access_token;
  var newToken = yield ProductHunt.token();
  newToken.expiresAt = moment().add(newToken.expires_in, 's').toDate();
  if (!token)
    yield PH.insert(newToken);
  else
    yield PH.updateById(token._id, newToken);
  return newToken.access_token;
};
