const { ResourceList } = require('../models');


module.exports = {
    /* 
    ** Create ResourceList
    */
    createResList: async (req, res, next) => {
        try {
            let urlTitle = await generateUrlTitle(req.body.title);
            let resourcelist = new ResourceList({
                ...req.body,
                urlTitle,
                createdBy: req.user.id
            });
            await resourcelist.save();
            res.status(200).json({ success: true });

        } catch (error) {
            next(error)
        }
    },

    /* 
    ** Get all ResourceList
    */
    getAllResList: async (req, res, next) => {
        try {

            let reslists = await ResourceList.find({}).populate('createdBy', 'name username img');
            res.status(200).json({ success: true, reslists });

        } catch (error) {
            next(error)
        }
    },

    /* 
    ** Get single ResourceList
    */
    getSingleResList: async (req, res, next) => {
        try {
            let urlTitle = req.params.urlTitle;
            console.log(urlTitle)
            let reslist = await ResourceList.findOne({ urlTitle }).populate('createdBy', 'name username img');
            res.status(200).json({ success: true, reslist });

        } catch (error) {
            next(error)
        }
    }
}


/* 
*Generate Unique url title
*/
const generateUrlTitle = async (title) => {
    title = title.replace(/ /g, "-").toLowerCase();
    let urlTitle = title;
    let res = await ResourceList.findOne({ urlTitle });
    let number = 0;
    while (res) {
        number++;
        urlTitle = `${title}${number}`;
        res = await ResourceList.findOne({ urlTitle });
    }
    return urlTitle;
} 