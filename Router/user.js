// Import des packages
const express = require("express");
const User = require("../Model/User");

// Import d'utilitaires
const { encrypt, isValidHash } = require("../Utils/encryption");

// =================================================== \\
// ======= Création et configuration du router ======= \\
// =================================================== \\
const router = express.Router();

// ~~~~~~~~~~~~~ Route qui permet d'authentifier un utilisateur ~~~~~~~~~~~~~ \\
router.post("/login", async (req, res) => {
  try {
    // Récupère les données transmises par le body
    const { username, password } = req.body;

    // Guard clauses
    if (!username) throw new Error("Failed to login");
    if (!password) throw new Error("Failed to login");

    // Récupère les données en bdd
    const isUser = await User.findOne({ username });
    if (!isUser) throw new Error("Failed to login");

    // Vérifie le mot de passe
    const isGoodHash = isValidHash(password, isUser.salt, isUser.hash);
    if (!isGoodHash) throw new Error("Failed to login");

    // Réponse retournée
    res.status(200).json({
      success: true,
      token: isUser.token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// ~~~~~~~~~~~~~ Route qui permet d'enregistrer un utilisateur ~~~~~~~~~~~~~ \\
router.post("/signup", async (req, res) => {
  try {
    // Récupère les données transmises par le body
    const { username, password, email } = req.body;

    // Guard clauses
    if (!username) throw new Error("You must provide an username");
    if (!password) throw new Error("You must provide a password");
    if (!email) throw new Error("You must provide an email");

    // Vérifie si l'utilisateur existe déjà
    const isUser = await User.findOne({ username });
    if (isUser) throw new Error("This username is already used");

    // Crypte le mot de passe
    const { salt, hash, token } = encrypt(password);

    // Crée et enregistre le nouvel utilisateur
    const newUser = new User({
      email,
      username,
      token,
      salt,
      hash,
    });
    await newUser.save();

    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;

// TODO : Ajouter de meilleurs vérifications sur les données transmises par l'utilisateur afin garantir la sécurité
