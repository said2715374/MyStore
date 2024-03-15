import { Router } from "express";
import { addCaisse, caisseList, removeCaisse, updateCaisse } from "../controllers/Caisse.js";

const caisseRouter = Router();

caisseRouter
    .get("/", caisseList)
    .post("/", addCaisse)
    .put("/:id", updateCaisse)
    .delete("/:id", removeCaisse);

export default caisseRouter;
