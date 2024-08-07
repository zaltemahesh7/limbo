var mongoose = require("mongoose");

var testimonialSchema = new mongoose.Schema({
  Testimonial: String,
  Testimonial_Autor_Name: String,
  trainer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Registration",
  }, // Reference to Trainer
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
