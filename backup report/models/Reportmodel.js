const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ReportSchema = new Schema({
  Year: {
    type: String,
    required: [false, "Title is required"],
    default: null,
  },
  Unique_Id: {
    type: String,
    required: [false, "Title is required"],
    default: null,
  },
  File_Name: {
    type: String,
    required: [false, "Title is required"],
    default: null,
  },
});
// const Students = mongoose.model("student", StudentSchema);
// module.exports = Students;
module.exports = ReportSchema;
