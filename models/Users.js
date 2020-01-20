const mongoose = require("mongoose");
const Schema = mongoos.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  biography: {
    type: String
  },
  college: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now()
  },
  friends: [
    {
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      unique_id: {
        type: String,
        required: true
      }
    }
  ],
  friendRequest: [
    {
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      unique_id: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = User = mongoose.model("users", UserSchema);
