/*
  Simple wrapper to request library
  http://github.com/mikeal/request, depend on request library
  For use in Koa2.
*/

var _request = require('request');

function request(uri, options) {
    return new Promise(function (resolve, reject) {
        _request(uri, options, function (error, response, body) {
            error && reject(error);
            resolve(response, body);
        })
    })
}

// 覆盖request请求方法
for (var attr in _request) {
    if (_request.hasOwnProperty(attr)) {
        if (['get', 'post', 'put', 'patch', 'head', 'del'].indexOf(attr) > -1) {
            request[attr] = (function (attr) {
                return function (uri, options) {
                    return new Promise(function (resolve, reject) {
                        _request(uri, options, function (error, response, body) {
                            error && reject(error);
                            resolve(response, body);
                        })
                    })
                }
            })(attr);
        } else {
            request[attr] = _request[attr];
        }
    }
}

module.exports = request;