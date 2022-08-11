// ---------------ELECTION AND VOTING CONTROLLERS--------------
const ElectionSchema = require("../../models/election-model/electionCRUDModel");

const createElection = async (req, res) => {
  const { electionData } = req.body;
  try {
    const election = await ElectionSchema.createElection(electionData);
    // create token
    res.status(201).json({
      message: "Election was created  successfully",
      ok: true,
      success: true,
      token: election.token,
      data: election,
    });
  } catch (error) {
    res.status(200).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};
const resetElection = async (req, res) => {
  const { electionData, Id } = req.body;
  try {
    const election = await ElectionSchema.resetElection(electionData, Id);
    // create token
    res.status(201).json({
      message: "Election was reset  successfully",
      ok: true,
      success: true,
      token: election?.token,
      data: election,
    });
  } catch (error) {
    res.status(200).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};
const verifyVoterId = async (req, res) => {
  const { voterId, orgCode, electionId, token } = req.body;
  try {
    const voter = await ElectionSchema.verifyVoterId(
      voterId,
      orgCode,
      electionId,
      token
    );
    // create token
    res.status(201).json({
      message: "Voter verified successfully",
      ok: true,
      success: true,
      token: voter?.token,
      data: { ...voter?.data, orgCode },
    });
  } catch (error) {
    res.status(200).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};
const loginToResulstScreen = async (req, res) => {
  const { password, orgCode, electionId, token } = req.body;
  try {
    const voter = await ElectionSchema.loginToResulstScreen(
      password,
      orgCode,
      electionId,
      token
    );
    // create token
    res.status(201).json({
      message: "User verified successfully",
      ok: true,
      success: true,
      token: voter?.token,
      data: { ...voter?.data, orgCode },
    });
  } catch (error) {
    res.status(200).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};
const getLatesResults = async (req, res) => {
  const { orgCode, electionId, token } = req.body;
  try {
    const voter = await ElectionSchema.getLatesResults(
      orgCode,
      electionId,
      token
    );
    // create token
    res.status(201).json({
      message: "Latest results returned",
      ok: true,
      success: true,
      token: voter?.token,
      data: { ...voter?.data, orgCode },
    });
  } catch (error) {
    res.status(200).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};
const getAllElections = async (req, res) => {
  const { orgCode, token } = req.body;
  try {
    const elections = await ElectionSchema.getAllElections(orgCode, token);
    // create token
    res.status(201).json({
      message: "Obtained election list succesfully",
      ok: true,
      success: true,
      token: elections?.token,
      data: elections?.data,
    });
  } catch (error) {
    res.status(200).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};
const getSingleElection = async (req, res) => {
  const { orgCode, electionId, token } = req.body;
  try {
    const elections = await ElectionSchema.getSingleElection(
      orgCode,
      electionId,
      token
    );
    // create token
    res.status(201).json({
      message: " Latest election detail obtained succesfully ",
      ok: true,
      success: true,
      token: elections?.token,
      data: elections?.data,
    });
  } catch (error) {
    res.status(200).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};
const castVote = async (req, res) => {
  const { voteData } = req.body;
  try {
    const voter = await ElectionSchema.castVote(voteData);
    // create token
    res.status(201).json({
      message: "Your vote has been recorded successfully",
      ok: true,
      success: true,
      token: voter?.token,
      data: voter?.data,
    });
  } catch (error) {
    res.status(200).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};
module.exports = {
  createElection,
  verifyVoterId,
  castVote,
  loginToResulstScreen,
  getLatesResults,
  getAllElections,
  getSingleElection,
  resetElection,
};
