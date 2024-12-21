import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  termsAgreed: {
    required: true,
    type: Boolean,
  },
  watchLater: {
    required: false,
    type: Array,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
