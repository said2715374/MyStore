// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle pour le fournisseur
const Fournisseur = database.define('Fournisseur', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomEntreprise: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Exporter le modèle de fournisseur
export default Fournisseur;