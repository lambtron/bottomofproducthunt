
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');
var Post = wrap(db.get('post'));

/**
 * Expose `Post`.
 */

module.exports = Post;
