// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle pour le Magasin
const Magasin = database.define('Magasin', {
    address: { type: DataTypes.STRING, allowNull: false },
    superviseur: { type: DataTypes.STRING, allowNull: false },
})

// Exporter le modèle du Magasin
export default Magasin;