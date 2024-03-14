// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle pour le produit
const Produit = database.define('Produit', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateEntree: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dateExpiration: {
        type: DataTypes.DATE,
        allowNull: true
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    prix: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
});

// Exporter le modèle de produit
export default Produit;