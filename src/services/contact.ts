import * as ContactModel from "../model/contact";

export const getContacts = async () => {
    const list = await ContactModel.getContacts();
    return list;
}

export const createContact = async (name: string) => {
    const list = await ContactModel.createContact(name);
    return list;
}

export const deleteContact = async (name: string) => {
    const list = await ContactModel.deleteContact(name);
    return list;
}