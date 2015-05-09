function default_1(client, options, next) {
    next(null, client.generateAuthUrl(options));
}
exports.default = default_1;
