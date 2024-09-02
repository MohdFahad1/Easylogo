import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    reuiqred: [true, "Please provide an email"],
    unique: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
