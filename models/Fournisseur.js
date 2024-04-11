import { DataTypes } from "sequelize";
import database from "../config/connexion.js";

const Fournisseur = database.define('Fournisseur', {
    nom: {type: DataTypes.STRING,allowNull: false},
    nomEntreprise: { type: DataTypes.STRING,allowNull: false}
});



export default Fournisseur;



