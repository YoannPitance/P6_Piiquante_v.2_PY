const mongoose = require("mongoose");
const password = process.env.DB_PASSWORD;
const username = process.env.DB_USER;

mongoose
  .set("strictQuery", true)
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.yzggddx.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("connecté à mongodb"))
  .catch((error) => console.log(" erreur de connexion à mongodb", error));

module.exports = mongoose;
