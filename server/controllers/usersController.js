const { User } = require('../models');





module.exports = {


    /* 
    ** Get single user
    */
    usersSingle: async (req, res, next) => {

        try {
            // Extract profile from request
            const profile = req.user;



            res.status(200).json({ profile });
        } catch (error) {
            next(error);
        }
    },

    /* 
    ** Get single user
    */
    usersSingleOther: async (req, res, next) => {

        try {

            const userId = req.params.id;
            // Call service to add user's google profile to db
            const profile = await User.findOne({ "_id": userId });
            console.log("profile", profile);
            if (profile) {
                res.status(200).json({ profile });
            } else {
                const err = new Error('Not Found');
                err.status = 404;
                throw err;
            }

        } catch (error) {
            next(error);
        }
    }
};