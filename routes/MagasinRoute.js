import { Router } from "express";
import { magasinList, addMagasin, updateMagasin, removeMagasin } from "../controllers/Magasin.js";

const magasinRouter = Router();

// Route pour récupérer la liste des magasins
magasinRouter.get("/", magasinList);

// Route pour ajouter un nouveau magasin
magasinRouter.post("/", addMagasin);

// Route pour mettre à jour un magasin existant
magasinRouter.put("/:id", updateMagasin);

// Route pour supprimer un magasin existant
magasinRouter.delete("/:id", removeMagasin);

export default magasinRouter;
