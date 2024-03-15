import { Router } from "express";
import { addModePaiement, getModePaiement, removeModePaiement, updateModePaiement } from "../controllers/ModePaiement.js";

const modePaiementRouter = Router();

modePaiementRouter
    .get("/", getModePaiement)
    .post("/", addModePaiement)
    .put("/:id", updateModePaiement)
    .delete("/:id", removeModePaiement);

export default modePaiementRouter;
