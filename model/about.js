var mongoose = require("mongoose");

var aboutSchema = new mongoose.Schema({
  about_us: String,
  our_services: String,
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Registration",
    required: true,
  },
});

module.exports = mongoose.model("About", aboutSchema);
