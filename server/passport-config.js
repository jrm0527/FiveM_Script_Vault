import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";

function initialize(passport, getUserByEmail) {
  const authenticateUser = async (email, password, done) => {
    console.log("authenticate", email, password);
    const user = await getUserByEmail(email);
    console.log(user);
    if (user == null) {
      return done(null, false, {
        status: 409,
        message: "No user with that email",
      });
    }

    try {
      console.log("bcrypt", password, user.password);
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, {
          status: 409,
          message: "Password incorrect",
        });
      }
    } catch (e) {
      return done(e);
    }
  };
  passport.use(
    new LocalStrategy.Strategy({ usernameField: "email" }, authenticateUser)
  );
  passport.serializeUser((user, done) => {});
  passport.deserializeUser((id, done) => {});
}

export default initialize;
