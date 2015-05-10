var goog = require('googleapis');

exports.register = function (server, options, next) {
	'use strict';
	var OAuth2 = goog.auth.OAuth2;
	var oAuthClient = new OAuth2(options.clientId, options.clientSecret, options.redirectUri);

	server.method('oAuth.getToken', function (code, next) {
		require('./methods/get-token')(oAuthClient, code, next);
	});

	server.method('oAuth.generateAuthUrl', function (next) {
		var fn = require('./methods/generate-auth-url');
		return fn(OAuth2, {
			'access_type': options.accessType,
			scope: options.scope
		}, next);
	});

	server.method('oAuth.getClientInstance', function (next) {
		// returns a new instance for use in setCredentials
		var newClient = new OAuth2(options.clientId, options.clientSecret, options.redirectUri);
		next(null, newClient);
	});

	return next();
};

exports.register.attributes = {
	name: 'hapi-oauth-wrapper',
	version: '0.1.0'
};
