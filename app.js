const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
// SET UP EXPRESS APP
const app = express();
require("dotenv").config();

// CONNECT TO MONGOOSE
mongoose.connect("mongodb://localhost/election");
mongoose.Promise = global.Promise;

// allow cors
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Middle ware
app.use(express.json());

const userRoutes = require("./routes/users/userRoutes");
const organizationRoutes = require("./routes/election/electionRoutes");
const electionRoutes = require("./routes/election/electionCRUDRoutes");

// INITIALIZE ROUTES
app.use("/api/election", organizationRoutes);
app.use("/api/elections", electionRoutes);
app.use("/api/user", userRoutes);

// ERROR HANDLING
app.use((error, req, res, next) => {
  res.status(422).send({
    error: {
      message: error.message,
      statusCode: 422,
      status: false,
    },
  });
});

// LISTEN FOR ROUTES
let counts = 0;
const listener = app.listen(process.env.port || "3030", (req, res) => {
  counts++;
  console.log(
    `now listening at port ${listener.address().port || "3030"} ${counts}`
  );
});
