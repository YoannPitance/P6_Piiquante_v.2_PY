require("dotenv").config();
const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/user-route");
require("./database/mongoose");

const app = express();

// middlewares

app.use(cors());
app.use(express.json());

// routes

app.use("/api/auth", usersRoute);

module.exports = app;
