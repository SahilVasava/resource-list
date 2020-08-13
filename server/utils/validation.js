const Joi = require('joi');


module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = schema.validate(req.body);
            if (result.error) {
                const err = new Error(result.error);
                err.status = 422;
                throw err;
            }
            if (!req.value) { req.value = {}; }
            req.value['body'] = result.value;
            next();
        }
    },

    schemas: {
        resourceListSchema: Joi.object().keys({
            title: Joi.string().required(),
            resources: Joi.array().items(Joi.object().keys({
                title: Joi.string(),
                link: Joi.string().required(),
                cat: Joi.string().required()
            }))
        })
    }
}