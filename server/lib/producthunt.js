
/**
 * Module dependencies.
 */

var request = require('./request');
var Comment = require('./comment');
var Post = require('./post');
var _ = require('lodash');

/**
 * Static variables.
 */

var apiKey = process.env.PRODUCT_HUNT_API_KEY || '';
var apiSecret = process.env.PRODUCT_HUNT_API_SECRET || '';
var uri = 'https://api.producthunt.com/v1/';
var etag = '';

/**
 * Get access token.
 */

exports.token = function *() {
  var body = {
    client_id: apiKey,
    client_secret: apiSecret,
    grant_type: 'client_credentials'
  };
  var res = yield request.post(uri + 'oauth/token', body);
  return res.body;
};

/**
 * Get new posts.
 */

exports.posts = function *(token) {
  var res = yield request.get(uri + 'posts', token, etag);
  etag = res.header.etag;
  return bottom(res.body.posts);
};

/**
 *
 */

exports.comments = function *() {
  // var res = yield request.get(uri + 'comments');
  // save to Comment.
};

/**
 * Private helper function that only returns bottom of PH.
 */

function bottom(posts) {
  return {
    posts: _.filter(posts, function(post) {
      return post.votes_count < 51;
    })
  };
}
