
/**
 * Module dependencies.
 */

var ProductHunt = require('./producthunt');
var render = require('./render');
var PH = require('./ph');

/**
 * Render index html page.
 */

exports.index = function *() {
  var token = yield PH.token();
  var body = yield ProductHunt.posts(token);
  return this.body = yield render('index', body);
};
