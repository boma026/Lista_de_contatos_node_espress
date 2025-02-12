import express, { Request, Response} from "express";
import { createContactController, deleteContactController, getContactsController } from "../Controller/ContactController";

const dataSource = "./data/list.txt";

const router = express.Router(); 

router.post("/contact", createContactController)

router.get("/contacts", getContactsController)

router.delete("/contact", deleteContactController);

export default router;
