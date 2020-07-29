const router = require('express-promise-router')();
const passport = require('passport');

const { usersController } = require('../controllers');
const passportConf = require('../passport');
const passportJWT = passport.authenticate('jwt', { session: false });

// Get single profile
router.route('/')
    .get(passportJWT, usersController.usersSingle);

// Get single other profile
router.route('/:id')
    .get(usersController.usersSingleOther);

const usersRoute = module.exports = router;