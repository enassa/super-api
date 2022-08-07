// ---------------AUTH CONTROLLERS--------------
// const res = require("express/lib/response");
const User = require("../../models/users/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  console.log(process.env.SECRET);
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // create token
    const token = createToken(user._id);

    res.status(201).json({
      message: "Login was successfull",
      ok: true,
      success: true,
      token,
      data: {
        email: user.email,
      },
    });
  } catch (error) {
    res.status(200).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};

const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.register(email, password);
    // create token
    const token = createToken(user._id);

    res.status(201).json({
      message: "Login was successfull",
      ok: true,
      success: true,
      token,
      data: {
        email: user.email,
      },
    });
  } catch (error) {
    res.status(200).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};

const forgotPassword = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.forgotPassword(
      email,
      password,
      req.socket.localPort
    );
    res.status(201).json({
      message: `A reset url has been sent to your email:${user.email}`,
      ok: true,
      success: true,
      data: {
        email: user.email,
      },
    });
  } catch (error) {
    res.status(200).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};

const resetPassword = async (req, res) => {
  const { email, password, token } = req.body;
  try {
    const response = await User.resetPassword(email, password, token);
    // create token
    res.status(201).json({
      message: "Your password has been reset succesfully",
      ok: true,
      success: true,
      data: {
        email: response.email,
      },
    });
  } catch (error) {
    res.status(200).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};

const verifyResetLink = async (req, res) => {
  const { email, token } = req.params;
  const decodedEmail = Buffer.from(email, "base64").toString("ascii");
  try {
    const user = await User.verifyResetLink(decodedEmail);
    // create token
    const secret = process.env.SECRET + user.password;
    const tokenValidity = jwt.verify(token, secret);
    res.status(201).json({
      message: "Link is valid",
      ok: true,
      success: true,
      data: {
        email: user.email,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      ok: true,
      success: false,
    });
  }
};

const getUsers = async (req, res) => {
  res.json({ message: "get user" });
};

// export const encodeToB64 = (string) => {
//   return btoa(string);
// };
// export const decodeFromB64 = (string) => {
//   return atob(string);
// };

// --------------CRUDE CONTROLLERS---------------

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
  signUpUser,
  loginUser,
  getUsers,
  forgotPassword,
  verifyResetLink,
  resetPassword,

  castVote,
  createElection,
  updateElection,
  getContestants,
  deleteElection,
};
