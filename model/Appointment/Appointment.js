const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    t_id: {
      type: Schema.Types.ObjectId,
      ref: "Trainer",
      required: true,
    },
    u_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    }, // Assuming you have a User model
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
