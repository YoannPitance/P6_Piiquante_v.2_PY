const passwordSchema = require("../models/password-model");

module.exports = (req, res, next) => {
  if (passwordSchema.validate(req.body.password)) {
    next();
  } else {
    return res.status(400).json({
      error: `Le mot de passe est trop faible, Il doit contenir au moins 6 caractères dont au minimum une majuscule, une minuscule et 2 chiffres, et ne pas avoir d'espace : ${passwordSchema.validate(
        "req.body.password",
        { list: true }
      )}`,
    });
  }
};
