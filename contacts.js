const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

// function listContacts() {
//     return fs.readFile(contactsPath, "utf8", (error, data) => {
//       if (error) {
//         console.log(error);
//       }
//       console.log(data);
//     });
// }

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    return console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath, "utf8");
    const contactsArr = JSON.parse(contacts);
    const contactGet = contactsArr.find((contact) => contact.id !== contactId);
    return console.log(contactGet);
  } catch (err) {
    console.log(err);
  }
}

function removeContact(contactId) {
  // ...твой код
}

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
};
