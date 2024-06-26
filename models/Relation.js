import Caisse from "./Caisse.js";
import RevnueJournalier from "./RevnueJournalier.js";
import Role from "./Role.js";
import Utilisateur from "./Utilisateurs.js";
import Magasin from "./Magasin.js"
import Region from "./Region.js";
import Mode_paiement from "./Mode_paiement.js"; 
import Transaction from "./Transaction.js"; 
import Produit from "./Produit.js";

//relation Utilisateur Role

Role.hasMany(Utilisateur)

Utilisateur.belongsTo(Role)



//relation caisse RevnueJournalier

Caisse.hasMany(RevnueJournalier)

RevnueJournalier.belongsTo(Caisse)



//relation region magasin

Region.hasMany(Magasin)

Magasin.belongsTo(Region)

//relation produits magasin 
Magasin.hasMany(Produit)

Produit.belongsTo(Magasin)


//relation utilisateurs magasin

Magasin.hasMany(Utilisateur)

Utilisateur.belongsTo(Magasin)

//relation transaction caisse 

Caisse.hasMany(Transaction);
Transaction.belongsTo(Caisse);

// Relation entre Transaction et Mode_paiment
Transaction.belongsTo(Mode_paiement);
Mode_paiement.hasMany(Transaction);


export  {Mode_paiement ,Transaction}
export {Region,Magasin}
export {Caisse,RevnueJournalier}
export {Role,Utilisateur}