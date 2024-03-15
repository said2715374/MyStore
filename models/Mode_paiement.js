import { DataTypes } from "sequelize";
import database from "../config/connexion.js";

const Mode_paiement = database.define('Mode_paiement', {
   process: {
       type: DataTypes.STRING,
       allowNull: false
   }
});

export default Mode_paiement;
