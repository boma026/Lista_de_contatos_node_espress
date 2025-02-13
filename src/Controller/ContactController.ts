import { RequestHandler } from "express";
import { createContact, deleteContact, getContacts } from "../services/contact";

export const getContactsController: RequestHandler = async (req, res) => {

    let list = await getContacts();
    res.json( { contacts: list} );

}

export const createContactController: RequestHandler = async (req, res) => {
   
    const { name } = req.body;

    if(!name || name.length < 2) {
        res.status(400).json({error: "name needs to be at least 2 characters"});
        return;
    }

    let list = await getContacts();
    
    await createContact(name);

    res.status(201).json( {contact: name} );

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


