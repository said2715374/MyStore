import { DataTypes } from "sequelize";
import database from "../config/connexion.js";

const Region = database.define('Region', {
   province : { type: DataTypes.STRING, allowNull: false }
});

// Exporter le modèle de rôle
export default Region;
