import { Router } from "express";
import { addRevenuJournalier, removeRevenuJournalier, revenuJournalierList, updateRevenuJournalier } from "../controllers/RevnueJournalier.js";

const revenuJournalierRouter = Router();

revenuJournalierRouter
    .get("/", revenuJournalierList)
    .post("/", addRevenuJournalier)
    .put("/:id", updateRevenuJournalier)
    .delete("/:id", removeRevenuJournalier);

export default revenuJournalierRouter;
