require("dotenv").config();
const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/user-route");
const path = require("path");
const sauceRoutes = require("./routes/sauce-route");
require("./database/mongoose");

const app = express();

// middlewares

app.use(cors());
app.use(express.json());

// routes

app.use("/api/auth", usersRoute);
app.use("/api/sauces", sauceRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
