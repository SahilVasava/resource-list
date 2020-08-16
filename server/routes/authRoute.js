const router = require('express-promise-router')();
const passport = require('passport');

const { authController } = require('../controllers');
const passportConf = require('../passport');
const googleAuthcode = passport.authenticate('google-authcode', { session: false });
const { celebrate, Joi, errors, Segments } = require('celebrate');

router.post('/google', celebrate({
    [Segments.BODY]: Joi.object({
        code: Joi.string().required()
    })
}), googleAuthcode, authController.googleAuth);

const authRoute = module.exports = router;