const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.google.web.client_id,
			clientSecret: keys.google.web.client_secret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			new User({
				googleId: profile.id
			}).save();
		}
	)
);
