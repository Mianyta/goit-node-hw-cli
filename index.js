import * as contactsService from './contacts.js';
import { program } from 'commander';

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
          const allContacts = await contactsService.listContacts();
          console.table(allContacts);
      break;
    case 'get':
          const getContactById = await contactsService.getContactById(id);
          console.log(getContactById);
      break;
    case 'add':
          const addNewContact = await contactsService.addContact(
            name,
            email,
            phone
          );
          console.log(addNewContact);
      break;
    case 'remove':
          const removeContact = await contactsService.removeContact(id);
          console.log(removeContact);
          break;
      
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

program
  .option('--action <type>')
  .option('--id <type>')
  .option('--name <type>')
  .option('--email <type>')
  .option('--phone <type>');
  
program.parse();

const argv = program.opts();
invokeAction(argv);