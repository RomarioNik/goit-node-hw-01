import { program } from "commander";
import contactsService from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
       const contacts = await contactsService.listContacts();
       console.log(contacts)
      break;

    case "get":
        const contact = await contactsService.getContactById(id);
       console.log(contact)
      break;

    case "add":
        const newContact = await contactsService.addContact({name, email, phone});
       console.log(newContact)
      break;

    case "remove":
        const deleteContact = await contactsService.removeContact(id);
       console.log(deleteContact)
      break;

    default:
        console.warn('\x1B[31m Unknown action type!');
  }
};

program
    .option("-a, --action, <type>")
    .option("-i, --id, <type>")
    .option("-n, --name, <type>")
    .option("-e, --email, <type>")
    .option("-p, --phone, <type>");

program.parse();
const options = program.opts()

invokeAction(options);
