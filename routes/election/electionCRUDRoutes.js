const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
var path = require("path");
var root = path.dirname(require.main.filename);

const {
  createElection,
  verifyVoterId,
} = require("../../controllers/election/electionCRUDController");

// -------------------CRUD ROUTES---------------------
router.post("/create", createElection);

// ------voting handling
router.post("/verify-voter", verifyVoterId);
router.put("/vote", createElection);

//------results handling

// router.put("/delete", confirmEmail);
// router.post("/vote", loginUser);
// router.post("/results", forgotPassword);
// router.post("/reset", forgotPassword);
// sign up route

module.exports = router;
