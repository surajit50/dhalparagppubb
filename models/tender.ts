import { Schema, model, models } from "mongoose";

const TenderSchema = new Schema({
  tenderID: {
    type: String,
  },
  nameofthework: {
    type: String,
  },
  fund: {
    type: String,
  },
  financialYear: {
    type: String,
  },

  tenderFormFee: {
    type: Number,
  },
  earnestMoney: {
    type: Number,
  },
  promiseCompletationDays: {
    type: String,
  },
  title: {
    type: String,
  },
  latDateOfDropingNit: {
    type: String,
  },
  dateOfOpenigTechnicalBid: {
    type: String,
  },
  estimateAmount: {
    type: Number,
  },
  createAt: {
    date: { type: Date, default: Date.now },
  },
});

const Tender = models.Tender || model("Tender", TenderSchema);

export default Tender;
