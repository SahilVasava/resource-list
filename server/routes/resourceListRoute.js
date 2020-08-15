const router = require('express-promise-router')();
const passport = require('passport');

const { resourceListController } = require('../controllers');
const passportConf = require('../passport');
const passportJWT = passport.authenticate('jwt', { session: false });
const { validateBody, schemas } = require('../utils/validation');

// Post (create) resoucelist
router.route('/')
    .post(passportJWT, validateBody(schemas.resourceListSchema), resourceListController.createResList);

// Get all resoucelist
router.route('/')
    .get(resourceListController.getAllResList);

const resourceListRoute = module.exports = router;