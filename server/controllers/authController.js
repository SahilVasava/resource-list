const { User } = require('../models');
const { signToken } = require('../utils/jwt');
module.exports = {
    /* 
    ** Google Create user
    */
    googleAuth: async (req, res, next) => {
        try {


            let user = await User.findOne({ 'google.id': req.user.id });
            if (user) {
                console.log('existingUser', user);

            } else {
                // Create a new user if user doesn't exists
                user = new User({
                    methods: ['google'],
                    google: {
                        id: req.user.id,
                        name: req.user.displayName,
                        email: req.user.emails[0].value,
                        img: req.user._json.picture
                    }
                })
                await user.save();
                console.log('newUser', user);
            }
            let token = await signToken(user);

            res.status(200).json({ token });

        } catch (error) {
            next(error)
        }
    }
}