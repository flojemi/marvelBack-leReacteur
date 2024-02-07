// Import des packages
const express = require("express");
const axios = require("axios");

// Création et configuration du router
const router = express.Router();

const API_KEY = process.env.REACTEUR_MARVEL_API_KEY;

// ========================================= \\
// ========== GET MARVEL COMICS ============ \\
// ========================================= \\
router.get("/marvel/api/comics", async (req, res) => {
  try {
    // Vérifie les informations skip et limit transmises
    const { skip, limit } = req.query;
    if (Number.isNaN(skip)) throw new Error("Skip must be a number");
    if (Number.isNaN(limit)) throw new Error("Limit must be a number");

    // Monte les strings pour les greffer à la requête
    const skipStr = `${skip ? `&skip=${skip}` : ""}`;
    const limitStr = `${limit ? `&limit=${limit}` : ""}`;

    // Exécute la requête
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${API_KEY}${skipStr}${limitStr}`
    );

    // Retourne la réponse
    res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "can't get comics",
    });
  }
});

// ============================================== \\
// ======== GET CHARACTER MARVEL COMICS ========= \\
// ============================================== \\
router.get("/:id", async (req, res) => {
  try {
    // Récupérer la paramètre ID
    const { id } = req.params;

    // Exécute la requête
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${API_KEY}`
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

// Export du router
module.exports = router;
