import { Router } from "express";
import { addModePaiement, modePaiementList, removeModePaiement, updateModePaiement } from "../controllers/Mode_paiement.js";

const modePaiementRouter = Router();

modePaiementRouter
    .get("/", modePaiementList)
    .post("/", addModePaiement)
    .put("/:id", updateModePaiement)
    .delete("/:id", removeModePaiement);

export default modePaiementRouter;
