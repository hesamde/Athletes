const mongoose = require("../db/index");
const { Schema, model } = mongoose;

const AthleteSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: false,
      trim: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    achievement: {
      type: String,
      required: false,
      trim: true,
    },
    dateofbirth: {
      type: Date,
      required: true,
      trim: true,
      lowercase: true,
    },
    gender: {
      type: String,
      required: false,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Athlete = model("athlete", AthleteSchema, "athlete");
module.exports = Athlete;
