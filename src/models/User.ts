import mongoose, { Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface IUser extends Document {
  email: String;
  password: String;
}

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

export const User = mongoose.model<IUser>("IUser", userSchema);
