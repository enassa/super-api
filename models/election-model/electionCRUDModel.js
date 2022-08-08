const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { genSalt } = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const moment = require("moment");
const {
  sendEmailWithNodeMailer,
  sendEmailWithGoogle,
} = require("../../controllers/mailer/sendEmail");
const {
  getHtmlBody,
  getRandomStringKey,
  getRandomInt,
  getCreatedElectionBody,
  generateRandomNoDashes,
  generateShortId,
} = require("../../constants");

const OrgSchema = require("./electionModel");

const ElectionSchema = new Schema({
  Id: {
    type: String,
    required: true,
    // unique: true,
  },
  DateCreated: {
    type: String,
    required: false,
  },
  Password: {
    type: String,
    required: true,
  },
  OrganizationEmail: {
    type: String,
    required: true,
  },
  CreatedBy: {
    type: String,
    required: false,
  },
  Title: {
    type: String,
    required: true,
  },
  NumberOfVoters: {
    type: Number,
    required: false,
    default: 0,
  },
  TotalVoted: {
    type: Number,
    required: false,
    default: 0,
  },
  GeneralInfo: {
    type: Object,
    required: true,
  },
  ContestantDefinition: {
    type: Object,
    required: true,
  },
  Positions: {
    type: Array,
    required: false,
  },
  Contestants: {
    type: Array,
    required: false,
  },
  VotingLink: {
    type: String,
    required: true,
    unique: true,
  },
  ResultsLink: {
    type: String,
    required: true,
    unique: true,
  },
  VoterIds: {
    type: Array,
    required: false,
  },
  token: {
    type: String,
    required: false,
  },
});

// ------------------------STATIC SIGNUP METHOD------------------------
ElectionSchema.statics.createElection = async function (data) {
  console.log(data);
  // Validation
  if (!data) {
    throw Error("All fields are required");
  }
  // check if organization exist
  const organization = await OrgSchema.findOne({
    orgCode: data?.OrganizationId,
  });
  if (!organization) {
    throw Error(
      "An unsual activity has been detected, Extra security measures have been applied"
    );
  }
  // generate election id
  let electionId = generateShortId();

  // hash election password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("data?.Password", salt);

  // create confirm url
  const secret = process.env.SECRET + electionId + organization.orgCode;
  const token = jwt.sign(
    {
      Id: electionId,
    },
    secret,
    {
      expiresIn: "100d",
    }
  );

  // send reset url
  const votingLink = `${process.env.WEBSITE_URL}/v/vote-login/${Buffer.from(
    organization.orgCode
  ).toString("base64")}/${electionId}/${token}`;

  const resultsLink = `${process.env.WEBSITE_URL}/r/results-login/${Buffer.from(
    organization.orgCode
  ).toString("base64")}/${electionId}/${token}`;

  // create election
  const election = await this.create({
    ...data,
    Id: electionId,
    Password: hashedPassword,
    token: token,
    VotingLink: votingLink,
    ResultsLink: resultsLink,
  });

  sendEmailWithGoogle(
    null,
    "smtp.ethereal.email",
    "assanenathaniel@gmail.com",
    [election.OrganizationEmail],
    "KoinoVote.org - Confirm your account",
    "Please click on the link below to confirm your email account",
    `${getCreatedElectionBody(votingLink, resultsLink, election?.Title)}`
  );

  return {
    election,
  };
};

module.exports = mongoose.model("electionsModel", ElectionSchema);

// const orgExists = await this.findOne({ orgName });
// if (exists) {
//   throw Error("Organization name has already been taken");
// }

// const calcluateExpireInMinutes = () => {
//   const currentTime = "";
//   const startTime = data?.Starting;
//   const endTime = data?.Ending;

//   const minDifFromNowToStart = "";
//   const minDifFromStartToFinish = "";
//   const tokenExpiryDurationInMinutes = "";
//   var initialTimeFormat = moment(initialTime);
//   var endTimeFormat = moment(endTime);
//   var totalHours = endTimeFormat.diff(initialTimeFormat, "hours");

//   document.getElementById("total-hours").innerHTML = totalHours;
// };
