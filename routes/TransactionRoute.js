import { Router } from "express";
import { addTransaction, transactionList, removeTransaction, updateTransaction } from "../controllers/Transaction.js";

const transactionRouter = Router();

transactionRouter
    .get("/", transactionList)
    .post("/", addTransaction)
    .put("/:id", updateTransaction)
    .delete("/:id", removeTransaction);

export default transactionRouter;
