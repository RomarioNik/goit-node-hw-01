import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");

const updateContacts = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
}

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const contactItem = contacts.find(item => item.id === contactId);

    if (!contactItem) return null;

    return contactItem;
}

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const contactIndex = await contacts.findIndex(item => item.id === contactId);

    if (contactIndex === -1) return null;

    const [deletedContact] = contacts.splice(contactIndex, 1);
    await updateContacts(contacts);
    return deletedContact;
}

const addContact = async ({name, email, phone}) => {
    const contacts = await listContacts();
    const newContact = {
        "id": nanoid(),
        name,
        email,
        phone,
    }

    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
}

export default {listContacts, getContactById, removeContact, addContact};