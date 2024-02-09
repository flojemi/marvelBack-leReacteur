// Import des packages
const express = require("express");
const axios = require("axios");

// Construction et configuration du Routeur
const router = express.Router();

const API_KEY = process.env.REACTEUR_MARVEL_API_KEY;

// ============================================= \\
// ======== GET ALL MARVEL CHARACTERS ========== \\
// ============================================= \\
router.get("/", async (req, res) => {
  try {
    // Vérifie les informations skip et limit transmises
    const { skip, limit } = req.query;
    if (Number.isNaN(skip)) throw new Error("Skip must be a number");
    if (Number.isNaN(limit)) throw new Error("Limit must be a number");

    // Monte les strings pour les greffer à la requête
    const skipStr = `${skip ? `&skip=${skip}` : ""}`;
    const limitStr = `${limit ? `&limit=${limit}` : ""}`;

    // Exécution de la requête
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${API_KEY}${skipStr}${limitStr}`
    );

    // Retourne le résultat
    res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Can't get Marvel Characters",
    });
  }
});

// =============================================== \\
// ======== GET A MARVEL CHARACTER BY ID ========= \\
// =============================================== \\
router.get("/byid/:id", async (req, res) => {
  try {
    // Récupérer la paramètre ID
    const { id } = req.params;

    // Exécute la requête
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${id}?apiKey=${API_KEY}`
    );

    // Retourne la réponse
    res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Can't get the targeted character",
    });
  }
});

// ================================================= \\
// ======== GET A MARVEL CHARACTER BY NAME ========= \\
// ================================================= \\
router.get("/byname/:name", async (req, res) => {
  try {
    const { name } = req.params;

    // Vérifie les informations skip et limit transmises
    const { skip, limit } = req.query;
    if (Number.isNaN(skip)) throw new Error("Skip must be a number");
    if (Number.isNaN(limit)) throw new Error("Limit must be a number");

    // Monte les strings pour les greffer à la requête
    const skipStr = `${skip ? `&skip=${skip}` : ""}`;
    const limitStr = `${limit ? `&limit=${limit}` : ""}`;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?name=${name}&apiKey=${API_KEY}${skipStr}${limitStr}`
    );

    res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "No result for this name",
    });
  }
});

// Export du router
module.exports = router;
