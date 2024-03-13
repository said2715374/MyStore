import Caisse from "./Caisse.js";
import RevnueJournalier from "./RevnueJournalier.js";
import Role from "./Role.js";
import Utilisateur from "./Utilisateurs.js";

//relation Utilisateur Role

Role.hasMany(Utilisateur)

Utilisateur.belongsTo(Role)

export {Role,Utilisateur}

//relation caisse RevnueJournalier

Caisse.hasMany(RevnueJournalier)

RevnueJournalier.belongsTo(Caisse)

export {Caisse,RevnueJournalier}