import express, { Request, Response} from "express";
import { createContactController, deleteContactController, getContactsController } from "../Controller/ContactController";
import { privateRequest } from "../middlewares/auth";

const dataSource = "./data/list.txt";

const router = express.Router(); 

router.post("/contact", privateRequest, createContactController)

router.get("/contacts", getContactsController)

router.delete("/contact", privateRequest, deleteContactController);

export default router;
