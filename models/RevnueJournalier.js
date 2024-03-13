import { DataTypes } from "sequelize";
import database from "../config/connexion.js";

const RevnueJournalier = database.define('RevnueJournalier', {
    Revnue: { type: DataTypes.DOUBLE, allowNull: false }
});

// Exporter le modèle de RevnueJournalier
export default RevnueJournalier;