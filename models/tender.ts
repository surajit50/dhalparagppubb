import { Schema, model, models } from "mongoose";

// Define a schema
const TenderSchema = new Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  fileUrl: String,
});

// Create a model
const Tender = models.Tender || model("Tender", TenderSchema);

export default Tender;
