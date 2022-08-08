const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
var path = require("path");
var root = path.dirname(require.main.filename);

const {
  createElection,
} = require("../../controllers/election/electionCRUDController");

router.post("/create", createElection);

// router.put("/delete", confirmEmail);
// router.post("/vote", loginUser);
// router.post("/results", forgotPassword);
// router.post("/reset", forgotPassword);
// sign up route

// -------------------CRUD ROUTES---------------------

module.exports = router;
