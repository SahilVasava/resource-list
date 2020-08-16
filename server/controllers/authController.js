const { User } = require('../models');
const { signToken } = require('../utils/jwt');
module.exports = {
    /* 
    ** Google Create user
    */
    googleAuth: async (req, res, next) => {
        try {


            let user = await User.findOne({ 'googleId': req.user.id });
            // let user = await User.findOne({ 'google.id': req.user.id });
            if (user) {
                console.log('existingUser', user);

            } else {
                // Create a new user if user doesn't exists
                username = await generateUsername(req.user.displayName);
                user = new User({
                    methods: ['google'],
                    name: req.user.displayName,
                    username,
                    email: req.user.emails[0].value,
                    img: req.user._json.picture,
                    googleId: req.user.id,
                })
                /* user = new User({
                    methods: ['google'],
                    google: {
                        id: req.user.id,
                        name: req.user.displayName,
                        email: req.user.emails[0].value,
                        img: req.user._json.picture
                    }
                }) */
                await user.save();
                console.log('newUser', user);
            }
            let tokenData = await signToken(user);

            res.status(200).json({ tokenData });

        } catch (error) {
            next(error)
        }
    }
}


/* 
*Generate Unique username
*/
const generateUsername = async (name) => {
    name = name.replace(/ /g, "").toLowerCase();
    let username = name;
    let user = await User.findOne({ username });
    let number = 0;
    while (user) {
        number++;
        username = `${name}${number}`;
        user = await User.findOne({ username });
    }
    return username;
} 