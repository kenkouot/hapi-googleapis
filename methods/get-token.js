module.exports = function (client, code, next) {
    'use strict';
    client.getToken(code, function (err, tokens) {
        if (!err) {
            client.setCredentials(tokens);
        }
        next(err, tokens);
    });
};
