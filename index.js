console.log("hi");
// const { getCurrentDate } = require('./dataUtils')
const { listContacts } = require('./contacts') 
const { getContactById } = require("./contacts"); 
const { removeContact } = require("./contacts"); 

// console.log(`Data!!!!!!!!!!!!!!!${getCurrentDate()}`);
// console.log(listContacts());
console.log('getContactById!!!!!!', getContactById(1));
// console.log("removeContact", removeContact(2));
