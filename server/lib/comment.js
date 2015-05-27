
/**
 * Module dependencies.
 */

var db = require('./db');
var wrap = require('co-monk');
var Comment = wrap(db.get('comment'));

/**
 * Expose `Comment`.
 */

module.exports = Comment;
