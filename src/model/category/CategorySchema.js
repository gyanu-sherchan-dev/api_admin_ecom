import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      index: 1,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);
