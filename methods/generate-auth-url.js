module.exports = function (client, options, next) {
    next(null, client.generateAuthUrl(options));
};
