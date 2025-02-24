import { RequestHandler } from "express";
import { createContact, deleteContact, getContacts } from "../services/contact";
import sharp from "sharp";

export const getContactsController: RequestHandler = async (req, res) => {

    let list = await getContacts();
    res.json( { contacts: list} );

}

export const createContactController: RequestHandler = async (req, res) => {
   
    const { name } = req.body;

    if (!req.file || (req.file && !req.file.mimetype.includes("image"))){
        res.json({ error: "no image detected!"} );
        return;
    }


    if(!name || name.length < 2) {
        res.json({error: "name needs to be at least 2 characters"});
        return;
    }

    await sharp(req.file.path)
        .resize(300, 300, {fit: "cover"})
        .toFile("public/avatars/" +req.file.filename+".jpeg")

    
    await createContact(name);

    res.status(201).json( {contact: name, photo: req.file?.filename} );

}

export const deleteContactController: RequestHandler = async (req, res) => {
   
    const { name } = req.query;
    if(!name) { 
        res.json( {error: "Please send a name to remove."} )
        return 
    }

    await deleteContact(name as string);

     res.json({ contact: name });

}


