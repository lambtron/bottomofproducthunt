
/**
 * Module dependencies.
 */

var request = require('superagent');

/**
 * Thunkified POST.
 */

exports.post = function post(uri, body) {
  return function(fn) {
    request
      .post(uri)
      .send(body)
      .end(fn);
  };
};

/**
 * Thunkified GET.
 */

exports.get = function get(uri, token, etag) {
  return function(fn) {
    request
      .get(uri)
      .set('Authorization', 'Bearer ' + token)
      .set('ETag', etag)
      .end(fn);
  };
};
