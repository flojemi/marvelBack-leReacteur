// Import des packages
require("dotenv").config();
const cors = require("cors");
const express = require("express");

const charactersRouter = require("./Router/characters");
const comicsRouter = require("./Router/comics");

// Création du serveur
const app = express();

// Middleware stack
app.use(cors());
app.use(express.json());

app.use("/marvel/api/characters", charactersRouter);
app.use("/marvel/api/comics", comicsRouter);

// Route qui n'existent pas
app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "This route does not exists",
  });
});

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
