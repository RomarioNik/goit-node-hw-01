import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");

const updateContacts = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch (e) {
    console.log(e.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contactItem = contacts.find((item) => item.id === contactId);

    if (!contactItem) return null;

    return contactItem;
  } catch (e) {
    console.log(e.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contactIndex = await contacts.findIndex(
      (item) => item.id === contactId
    );

    if (contactIndex === -1) return null;

    const [deletedContact] = contacts.splice(contactIndex, 1);
    await updateContacts(contacts);
    return deletedContact;
  } catch (e) {
    console.log(e.message);
  }
};

const addContact = async ({ name, email, phone }) => {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };

    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  } catch (e) {
    console.log(e.message);
  }
};

export default { listContacts, getContactById, removeContact, addContact };
