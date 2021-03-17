const mongoose = require("mongoose");
const schema = mongoose.Schema;

//  creating the user Schema

const UserSchema = new schema(
  {
    name: {
      type: String,
      required: "{PATH} is required",
    },
    bio: {
      type: String,
    },
    website: {
      type: String,
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
