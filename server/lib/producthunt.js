
/**
 * Module dependencies.
 */

var request = require('./request');
var Comment = require('./comment');
var Post = require('./post');

/**
 * Static variables.
 */

var id = process.env.PRODUCT_HUNT_ID || '';
var secret = process.env.PRODUCT_HUNT_SECRET || '';
var uri = 'https://api.producthunt.com/v1/';

/**
 *
 */

module.exports = ProductHunt;

/**
 * Get access token.
 */

ProductHunt.token = function *() {
  var body = {
    client_id: id,
    client_secret: secret,
    grant_type: 'client_credentials';
  };
  var res = yield request.post(uri + 'oauth/token', body);
  return res.access_token;
};

/**
 * Get new posts.
 */

ProductHunt.posts = function *() {
  // var res = yield request.get(uri + 'posts');
  // save to Post.
};

/**
 *
 */

ProductHunt.comments = function *() {
  // var res = yield request.get(uri + 'comments');
  // save to Comment.
};
