// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle pour l'utilisateur
const Utilisateur = database.define('Utilisateur', {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    DateNaissance: { type: DataTypes.DATE },
    Telephone: { type: DataTypes.DECIMAL },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },  // Ajout de l'attribut email
    MotDePasse: { type: DataTypes.STRING, allowNull: false }            // Mise à jour pour s'assurer que le mot de passe n'est pas nul
})




// Exporter le modèle d'utilisateur
export default Utilisateur;
