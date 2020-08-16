const router = require('express-promise-router')();
const passport = require('passport');

const { usersController } = require('../controllers');
const passportConf = require('../passport');
const passportJWT = passport.authenticate('jwt', { session: false });
const { celebrate, Joi, errors, Segments } = require('celebrate');
// Get single profile
router.route('/')
    .get(passportJWT, celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required().regex(/abc\d{3}/)
        })
    }),
        usersController.usersSingle);

// Get single other profile
router.route('/:id')
    .get(usersController.usersSingleOther);

const usersRoute = module.exports = router;