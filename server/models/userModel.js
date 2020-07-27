const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// User Schema
const UserSchema = mongoose.Schema({
    methods: [{
        type: String,
        required: true
    }],
    google: {
        id: {
          type: String
        },
        name:{
            type: String
        },
        email: {
          type: String,
          lowercase: true
        },
        img: {
          type:String
        }
    }
});

module.exports = mongoose.model('User', UserSchema);