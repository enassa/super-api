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

    res.status(201).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.register(email, password);
    // create token
    const token = createToken(user._id);

    res.status(201).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email, password } = req.body;
  const {
    sendEmailWithNodeMailer,
    sendEmailWithGoogle,
  } = require("../../controllers/mailer/sendEmail");
  try {
    const user = await User.forgotPassword(email, password);
    const secret = process.env.SECRET + user.password;
    const token = jwt.sign({ email: user.email }, secret, {
      expiresIn: "15m",
    });
    const resetUrl = `http://localhost:${
      req.socket.localPort
    }/api/user/link/${Buffer.from(user.email).toString("base64")}/${token}`;
    // create token
    sendEmailWithGoogle(
      req.socket.localPort,
      "smtp.ethereal.email",
      "assanenathaniel@gmail.com",
      ["assanicsone@gmail.com"],
      "KoinoVote - Password reset link",
      "This is the email text body",
      `<html><body> 
      <h1 style='color:green'>Koinovote.org - Password reset</h1>
      <p > Hi ${user.email},</p>
      <p>Please click on the link below to reset your password. Please note that the link will expire in 15 minutes.</p>
      <p'> Reset your password:  ${resetUrl}</p>
      </body</html>`
    );
    res.status(201).json({ email, resetUrl });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const resetPassword = async (req, res) => {
  const { email, password, token } = req.body;
  try {
    const user = await User.resetPassword(email, password);
    const secret = process.env.SECRET + user.password;
    const tokenValidity = jwt.verify(token, secret);

    // create token
    res.status(201).json({ email, response });
  } catch (error) {
    res.status(400).json({ error: error.message });
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
    res.status(201).json({ email, message: "Link is valid" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  res.json({ message: "get user" });
};

module.exports = {
  signUpUser,
  loginUser,
  getUsers,
  forgotPassword,
  verifyResetLink,
  resetPassword,
};
// export const encodeToB64 = (string) => {
//   return btoa(string);
// };
// export const decodeFromB64 = (string) => {
//   return atob(string);
// };
