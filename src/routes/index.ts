import express, { Request, Response} from "express";
import { createContactController, deleteContactController, getContactsController } from "../Controller/ContactController";
import { privateRequest } from "../middlewares/auth";
import multer from "multer";

const dataSource = "./data/list.txt";

const upload = multer({
    dest: "uploads/"
})

const router = express.Router(); 

router.post("/contact", upload.single("photo"), createContactController)

router.get("/contacts", getContactsController)

router.delete("/contact", privateRequest, deleteContactController);

export default router;
