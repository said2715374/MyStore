import { Router } from "express";
import { addUtilisateur, utilisateurList, removeUtilisateur, updateUtilisateur } from "../controllers/Utilisateur.js";

const Utilisateurrouter = Router();

Utilisateurrouter
    .get("/", utilisateurList)
    .post("/", addUtilisateur)
    .put("/:id", updateUtilisateur)
    .delete("/:id", removeUtilisateur);

export default Utilisateurrouter ;
