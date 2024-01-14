const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

(async () => {
  // Примеры использования функций
  console.table(await listContacts());
  console.log(await getContactById('someId'));
  console.log(await removeContact('someId'));
  console.log(await addContact('John Doe', 'john@example.com', '123-456-789'));
})();
