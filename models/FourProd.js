// Importer les modèles Produit et Fournisseur
import Produit from '.produit.js';
import Fournisseur from '.fournisseur.js';

// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle pour la table intermédiaire FourProd
const FourProd = database.define('FourProd', {});

// Définir les associations entre Produit et Fournisseur via la table FourProd
FourProd.belongsTo(Produit, { foreignKey: 'produit_id' });
FourProd.belongsTo(Fournisseur, { foreignKey: 'fournisseur_id' });

Produit.belongsToMany(Fournisseur, { through: FourProd });
Fournisseur.belongsToMany(Produit, { through: FourProd });

// Exporter le modèle FourProd
export default FourProd;