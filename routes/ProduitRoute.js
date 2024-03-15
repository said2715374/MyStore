import { Router } from "express";
import { addProduit, getProduit, removeProduit, updateProduit } from "../controllers/Produit.js";

const produitRouter = Router();

produitRouter
    .get("/", getProduit)
    .post("/", addProduit)
    .put("/:id", updateProduit)
    .delete("/:id", removeProduit);

export default produitRouter;
