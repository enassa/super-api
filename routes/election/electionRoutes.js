const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
var path = require("path");
var root = path.dirname(require.main.filename);

const {
  // AUTH
  signUpUser,
  loginUser,
  getUsers,
  forgotPassword,
  resetPassword,
  verifyResetLink,
  // OTHERS
  getContestants,
  createElection,
  updateElection,
  deleteElection,
} = require("../../controllers/election/electionController");

// -----------------AUTH ROUTES-------------------

const {} = require("../../controllers/users/userController");
// login route
router.post("/register", signUpUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/link/:email/:token", verifyResetLink);
router.get("/list", getUsers);
// sign up route

// -------------------CRUD ROUTES---------------------
router.get("/contestants", getContestants);

// ADD ELECTION
router.post("/create-election", createElection);

// UPDATE ELECTION
router.put("/update-election", updateElection);

// DELETE SURVEY
router.delete("/delete-election", deleteElection);
module.exports = router;
