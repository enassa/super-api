const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
  Name: {
    type: String,
    required: [false, "Title is required"],
    default: null,
  },
  Gender: {
    type: String,
    required: [false, "Title is required"],
    default: null,
  },
  JHS_No: {
    type: String,
    required: [false, "Title is required"],
    default: null,
  },
  Unique_Id: {
    type: String,
    required: [false, "Title is required"],
    default: null,
  },
  First_Name: {
    type: String,
    required: [false, "Title is required"],
    default: null,
  },
  Surname: {
    type: String,
    required: [false, "Title is required"],
    default: null,
  },
  Other_Names: {
    type: String,
    required: [false, "Description is required"],
    default: null,
  },
  Email: {
    type: String,
    required: [false, "url is required"],
    default: null,
  },
  DOB: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  BECE_Index: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Programme: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Class: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Residential_Status: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Guardians_Contact: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Whatsapp: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Call_Contact: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  WASSCE_Index: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Track: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Region: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  City: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Area: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  House: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Area: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Guardians_Name: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Guardians_Email: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  Guardians_Profession: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  image: {
    type: String,
    required: [false, " is required"],
    default: null,
  },
  reports: {
    type: Array,
    required: [false, " is required"],
    default: null,
  },
});
// const Students = mongoose.model("student", StudentSchema);
module.exports = StudentSchema;

// First_Name:"Nathaniel",
// Surname:"Assan",
// Other_Names:"Ewudzi",
// Email:"assanenathaniel@gmail.com",
// DOB:"08 December 1997",
// BECE_Index:"1020334534",
// Programme:"General Science",
// Class:"2 Science 2",
// Residential_Status:"Border",
// Guardians_Contact:"0241175240",
// House_No:"GA-2023",
// Whatsapp:"0501595639",
// Call_Contact:"0549546822",
// WASSCE_Index:"102388494",
// Track:"Gold",
// Region:"Greater Accra",
// City:"Accra",
// Area:"Achimota",
// House:"Livingston House",
// Guardians_Name:"Comfort Abban",
// Guardians_Email:"assanics@gmail.com",
// Guardians_Profession:"Peti trader",
// image:null
