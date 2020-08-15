const mongoose = require('mongoose');



// User Schema
const UserSchema = mongoose.Schema({
  methods: [{
    type: String,
    required: true
  }],
  name: {
    type: String
  },
  email: {
    type: String,
    lowercase: true
  },
  img: {
    type: String
  },
  googleId: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);




/* const UserSchema = mongoose.Schema({
  methods: [{
    type: String,
    required: true
  }],
  google: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    },
    img: {
      type: String
    }
  }
}); */