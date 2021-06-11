import mongoose, { Document } from "mongoose";

interface IComment extends Document {
  author: String;
  content: String;
  date: String;
}
const commentSchema = new mongoose.Schema<IComment>({
  author: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
  },
});

export const Comment = mongoose.model<IComment>("Comment", commentSchema);
