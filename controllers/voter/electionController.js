const castVote = async (req, res) => {
  res.json({ message: "cast vote" });
};
const createElection = async (req, res) => {
  res.json({ message: "create election" });
};
const updateElection = async (req, res) => {
  res.json({ message: "update elction" });
};
const getContestants = async (req, res) => {
  res.json({ message: "get contestants" });
};
const deleteElection = async (req, res) => {
  res.json({ message: "get contestants" });
};

module.exports = {
  castVote,
  createElection,
  updateElection,
  getContestants,
  deleteElection,
};
