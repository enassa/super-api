import CREDENTIALS from "./config/api-variables";
const { google } = require("googleapis");
const nodemailer = require("nodemailer");

const CLIENT_ID = CREDENTIALS.client_id;
const CLIENT_SECRET = CREDENTIALS.client_secret;
const REDIRECT_URI = CREDENTIALS.redirect_uris;
const REFRESH_TOKEN = CREDENTIALS.refresh_token;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
// function sendEmail
