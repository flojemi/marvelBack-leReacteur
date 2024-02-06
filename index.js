// Import des packages
require("dotenv").config();
const express = require("express");

// Création du serveur
const app = express();

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
