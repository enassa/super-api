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
};
