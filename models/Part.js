import { model, Schema } from "mongoose";

const partSchema = new Schema({
  partId: String,
  description: String,
  weight: Number,
  color: String,
});

const Part = model('Part', partSchema);

export { Part } ;
