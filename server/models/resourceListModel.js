const mongoose = require('mongoose');
const User = require('./userModel');

// Resource Schema
const ResourceSchema = mongoose.Schema({
    title: {
        type: String
    },
    link: {
        type: String,
        required: true
    },
    cat: {
        type: String,
        required: true
    }
});


// ResouceList Schema
const ResourceListSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    urlTitle: {
        type: String,
        required: true,
        unique: true
    },
    resources: [ResourceSchema],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('ResourceList', ResourceListSchema);