var goog = require('googleapis');

exports.register = function (server, options, next) {
	var OAuth2 = goog.auth.OAuth2;
	var oAuthClient = new OAuth2(options.clientId, options.clientSecret, options.redirectUri);

	server.method('oAuth.getToken', function (code, next) {
		require('./methods/get-token').default(oAuthClient, code, next);
	});

	server.method('oAuth.generateAuthUrl', function (next) {
		var fn = require('./methods/generate-auth-url').default;
		return fn(oAuthClient, {
			'access_type': options.accessType,
			scope: options.scope
		}, next);
	});

	return next();
};

exports.register.attributes = {
	name: 'hapi-oauth-wrapper',
	version: '0.1.0'
};
