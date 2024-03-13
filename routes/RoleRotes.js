import { Router } from "express";
import { addRole, roleList, removeRole, updateRole } from "../controllers/Role.js";

const Rolerouter = Router();

Rolerouter
    .get("/", roleList)
    .post("/", addRole)
    .put("/:id", updateRole)
    .delete("/:id", removeRole);

export default Rolerouter;
