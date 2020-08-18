const router = require('express-promise-router')();
const passport = require('passport');

const { resourceListController } = require('../controllers');
const passportConf = require('../passport');
const passportJWT = passport.authenticate('jwt', { session: false });
// const { validateBody, schemas } = require('../utils/validation'); validateBody(schemas.resourceListSchema)
const { celebrate, Joi, errors, Segments } = require('celebrate');
// Post (create) resoucelist
router.route('/')
    .post(passportJWT, celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            resources: Joi.array().items(Joi.object().keys({
                title: Joi.string(),
                link: Joi.string().required(),
                cat: Joi.string().required()
            }))
        }),
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required()
        }).unknown()
    }), resourceListController.createResList);

// Get all resoucelist
router.route('/')
    .get(resourceListController.getAllResList);

// Get single resoucelist
router.route('/:id')
    .get(celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().regex(/^[0-9a-fA-F]{24}$/)
        }
    }),
        resourceListController.getSingleResList);



const resourceListRoute = module.exports = router;



/* // Get single resoucelist
router.route('/:urlTitle')
    .get(celebrate({
        [Segments.PARAMS]: {
            urlTitle: Joi.string()
        }
    }),
        resourceListController.getSingleResList); */