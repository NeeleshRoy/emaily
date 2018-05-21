const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const keys = require('./config/keys');
const PORT = process.env.PORT || 5000;

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.google.web.client_id,
			clientSecret: keys.google.web.client_secret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken) => {
			console.log(accessToken);
		}
	)
);

app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: [ 'profile', 'email' ]
	})
);

app.listen(PORT);
