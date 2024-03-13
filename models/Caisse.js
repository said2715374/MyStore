import { DataTypes } from "sequelize";
import database from "../config/connexion.js";

const Caisse = database.define('Caisse', {
    FondCaisse: { type: DataTypes.DOUBLE, allowNull: false }
});

// Exporter le modèle de Caisse
export default Caisse;