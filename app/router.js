'use strict';

module.exports = app => {
	app.all('/user/token', app.oAuth2Server.token());
	app.get('/user/authenticate', app.oAuth2Server.authenticate(), 'user.authenticate');
};