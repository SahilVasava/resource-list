const { ResourceList } = require('../models');


module.exports = {
    /* 
    ** Create ResourceList
    */
    createResList: async (req, res, next) => {
        try {

            let resourcelist = new ResourceList({
                ...req.body,
                createdBy: req.user.id
            });
            await resourcelist.save();
            res.status(200).json({ success: true });

        } catch (error) {
            next(error)
        }
    }
}