import { Router } from "express";
import { addFourProd, getFourProd, removeFourProd, updateFourProd } from "../controllers/FourProd.js";

const fourProdRouter = Router();

fourProdRouter
    .get("/", getFourProd)
    .post("/", addFourProd)
    .put("/:id", updateFourProd)
    .delete("/:id", removeFourProd);

export default fourProdRouter;
