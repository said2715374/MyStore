import { Router } from "express";
import { addTransaction, getTransaction, removeTransaction, updateTransaction } from "../controllers/Transaction.js";

const transactionRouter = Router();

transactionRouter
    .get("/", getTransaction)
    .post("/", addTransaction)
    .put("/:id", updateTransaction)
    .delete("/:id", removeTransaction);

export default transactionRouter;
