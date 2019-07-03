import passportJwt from 'passport-jwt';
import mongoose from 'mongoose';
import config from 'config';

var user = require('../../core/models/user');

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const User = mongoose.model('users');

const opts = <{
  jwtFromRequest: any,
  secretOrKey: string,
}>{};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get('passport.secretOrKey');

export default (passport: any) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => err);
    })
  );
};