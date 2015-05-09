function default_1(client, code, next) {
    client.getToken(code, function (err, tokens) {
        next(err, tokens);
    });
}
exports.default = default_1;
