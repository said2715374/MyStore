import Caisse from "./Caisse.js";
import RevnueJournalier from "./RevnueJournalier.js";
import Role from "./Role.js";
import Utilisateur from "./Utilisateurs.js";
import Magasin from "./Magasin.js"
import Region from "./Region.js";


//relation Utilisateur Role

Role.hasMany(Utilisateur)

Utilisateur.belongsTo(Role)



//relation caisse RevnueJournalier

Caisse.hasMany(RevnueJournalier)

RevnueJournalier.belongsTo(Caisse)



//relation region magasin

Region.hasMany(Magasin)

Magasin.belongsTo(Region)



//relation utilisateurs magasin

Magasin.hasMany(Utilisateur)

Utilisateur.belongsTo(Magasin)


export {Region,Magasin}
export {Caisse,RevnueJournalier}
export {Role,Utilisateur}