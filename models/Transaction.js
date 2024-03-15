import { DataTypes } from "sequelize";
import database from "../config/connexion.js";

const Region = database.define('Transaction', {
   date: { type: DataTypes.DATE, allowNull: false },
   numero_employer: { type: DataTypes.INTEGER, allowNull: false },
   montant: { type: DataTypes.DOUBLE, allowNull: false }
});

// Exporter le modèle de région
export default Region;
