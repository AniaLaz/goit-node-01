const short = require("short-uuid");

const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
   return console.table(JSON.parse(data));
  } catch (err) {
    console.error(err);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath, "utf8");
    const contactsArr = JSON.parse(contacts);
    const contactGet = contactsArr.find((contact) => contact.id == contactId);
    return console.log(contactGet);
  } catch (err) {
    console.log(err);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath, "utf8");
    const contactsArr = JSON.parse(contacts);
    const contactGet = contactsArr.filter(
      (contact) => contact.id !== contactId
    );
    console.log("contactGet0", contactGet);
    await fs.writeFile(contactsPath, JSON.stringify(contactGet), "utf8");
  } catch (err) {
    console.log(err);
  }
}

async function addContact(name, email, phone) {
  const contactNew = {
    id: short.generate("0123456789"),
    name: name,
    email: email,
    phone: phone,
  };
   try {
    const contacts = await fs.readFile(contactsPath, "utf8");
    const contactsArr = JSON.parse(contacts);
    const newContactsArr = [...contactsArr, contactNew];
     console.log("newContactsArr!!!", newContactsArr);
    await fs.writeFile(contactsPath, JSON.stringify(newContactsArr), "utf8");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
