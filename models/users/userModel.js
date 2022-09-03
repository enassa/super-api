const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { genSalt } = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const {
  sendEmailWithNodeMailer,
  sendEmailWithGoogle,
} = require("../../controllers/mailer/sendEmail");
const { getHtmlBody, clientBaseUrl } = require("../../constants");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// STATIC SIGNUP METHOD
userSchema.statics.register = async function (email, password) {
  // Validation
  if (!email || !password) {
    throw Error("All fields are required");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password  is not strong enough");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("This email is already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

// STATIC LOGIN METHOD
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields are required");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("This email is incorrect");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Your password is incorrect");
  }
  return user;
};

// STATIC FORGOT PASSWORD METHOD

userSchema.statics.forgotPassword = async function (
  email,
  password,
  portNumber
) {
  // validate user info
  if (!email) {
    throw Error("All fields are required");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("This email is incorrect");
  }

  // validate token
  const secret = process.env.SECRET + user.password;
  const token = jwt.sign({ email: user.email }, secret, {
    expiresIn: "15m",
  });

  // send reset url
  const resetUrl = `${clientBaseUrl}/api/user/link/${Buffer.from(
    user.email
  ).toString("base64")}/${token}`;

  sendEmailWithGoogle(
    portNumber,
    "smtp.ethereal.email",
    "koinovote@gmail.com",
    ["assanicsone@gmail.com"],
    "KoinoVote - Password reset link",
    "This is the email text body",
    `${getHtmlBody(user, resetUrl)}`
  );
  return { ...user, link: resetUrl };
};

// STATIC FORGOT PASSWORD METHOD
userSchema.statics.verifyResetLink = async function (email) {
  if (!email) {
    throw Error("This link is incorrect");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("This link is incorrect");
  }
  return user;
};

// STATIC RESET PASSWORD METHOD
userSchema.statics.resetPassword = async function (email, password, token) {
  // validate request info
  if (!email || !password || !token) {
    throw Error("All fields are required");
  }

  // check if email exist
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("This email is incorrect");
  }

  // validate token
  const secret = process.env.SECRET + user.password;
  const tokenValidity = jwt.verify(token, secret);

  // update password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const updateDoc = {
    $set: {
      password: hash,
    },
  };
  // do not create is it does not exist
  const options = { upsert: false };
  const result = await this.findOneAndUpdate(
    { email: email },
    updateDoc,
    options
  );

  console.log("Validity", user);
  return {
    email: user.email,
    message: "Your password has been reset succesfully",
  };
};
module.exports = mongoose.model("UserModel", userSchema);
