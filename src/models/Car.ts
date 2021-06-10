import mongoose, { Document } from "mongoose";

interface ICar extends Document {
  title: String;
  description: String;
  imageUrl: String;
  userId: String;
}

const carSchema = new mongoose.Schema<ICar>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
});

export const Car = mongoose.model<ICar>("Car", carSchema);
