const { text } = require("body-parser");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PostSchema = new schema(
  {
    title: {
      type: String,
      required: "{PATH} is required",
    },
    subtitle: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", PostSchema);
