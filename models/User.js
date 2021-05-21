const { Schema, model } = require("mongoose");

const guest = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String, required: true,},
});

module.exports = model("User", guest);
