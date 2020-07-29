const router = require('express-promise-router')();
const passport = require('passport');

const { authController } = require('../controllers');
const passportConf = require('../passport');
const googleAuthcode = passport.authenticate('google-authcode', { session: false });


router.post('/google', googleAuthcode, authController.googleAuth);

const authRoute = module.exports = router;