require('dotenv').config();
import passport from 'passport';
import camelcaseKeys from 'camelcase-keys';
import GitHubStrategy from 'passport-github2';
import * as userDb from '../models/person';

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, (user as any).oauth_id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await userDb.getPersonByGitHub(id);
    done(null, user.rows[0]);
  } catch (e) {
    done(new Error('Failed to deserialize an user'));
  }
});

passport.use(
  //@ts-ignore
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK,
    },
    //@ts-ignore
    async (accessToken, refreshToken, profile, done) => {
      // find current user in UserModel
      console.log('profile :>> ', profile);
      let user = await userDb.getPersonByGitHub(profile.id);
      console.log('user :>> ', user);
      // create new user if the database doesn't have this user
      const name = profile.displayName ? profile.displayName : profile.username;
      if (!user.rows.length) {
        await userDb.createPersonByGitHub(
          profile.id,
          name,
          profile.photos[0].value
        );
        user = await userDb.getPersonByGitHub(profile.id);
      }
      done(null, user.rows[0]);
    }
  )
);
