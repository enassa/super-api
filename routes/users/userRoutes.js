const express = require("express");
const router = express.Router();

const {
  signUpUser,
  loginUser,
  getUsers,
  forgotPassword,
  resetPassword,
  verifyResetLink,
} = require("../../controllers/users/userController");
// login route
router.post("/register", signUpUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password", resetPassword);
router.get("/link/:email/:token", verifyResetLink);
router.get("/list", getUsers);
// sign up route

module.exports = router;
