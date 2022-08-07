const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
var path = require("path");
var root = path.dirname(require.main.filename);

const {
  getContestants,
  createElection,
  updateElection,
  deleteElection,
} = require("../../controllers/voter/electionController");

// GET CONTESTANTS
router.get("/contestants", getContestants);

// ADD ELECTION
router.post("/create-election", createElection);

// UPDATE ELECTION
router.put("/update-election", updateElection);

// DELETE SURVEY
router.delete("/delete-election", deleteElection);
module.exports = router;
