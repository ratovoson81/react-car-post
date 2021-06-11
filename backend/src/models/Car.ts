import mongoose, { Document, Schema } from "mongoose";

interface ICar extends Document {
  title: String;
  description: String;
  imageUrl: String;
  userId: String;
  comments: any;
}

const carSchema = new mongoose.Schema<ICar>({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

export const Car = mongoose.model<ICar>("Car", carSchema);
