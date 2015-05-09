module.exports = function (client, code, next) {
    client.getToken(code, function (err, tokens) {
        next(err, tokens);
    });
};
