// Import des packages
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const charactersRouter = require("./Router/characters");
const comicsRouter = require("./Router/comics");
const userRouter = require("./Router/user");

const initialLaunch = async () => {
  try {
    // Connexion à la base de données
    process.env.NODE_ENV === "dev" && (await mongoose.connect(process.env.LOCAL_DB_URI));
    process.env.NODE_ENV === "prod" && (await mongoose.connect(process.env.REMOTE_DB_URI));
    console.log("🟢 Connected to database");

    // Création du serveur
    const app = express();

    // Middleware stack
    app.use(cors());
    app.use(express.json());

    app.use("/marvel/api/characters", charactersRouter);
    app.use("/marvel/api/comics", comicsRouter);
    app.use("/marvel/api/user", userRouter);

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
      console.log("🟢 Listening on port", PORT);
    });
  } catch (error) {
    console.log("🔴", error);
  }
};

initialLaunch();
