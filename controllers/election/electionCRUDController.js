// ---------------ELECTION AND VOTING CONTROLLERS--------------
const ElectionSchema = require("../../models/election-model/electionCRUDModel");

const createElection = async (req, res) => {
  const { electionData } = req.body;
  try {
    const election = await ElectionSchema.createElection(electionData);
    // create token
    res.status(201).json({
      message: "Registeration was successfull",
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
module.exports = {
  createElection,
};
