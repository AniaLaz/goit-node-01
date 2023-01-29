console.log("hi");
// const { getCurrentDate } = require('./dataUtils')
const { listContacts } = require('./contacts') 
const { getContactById } = require("./contacts"); 

// console.log(`Data!!!!!!!!!!!!!!!${getCurrentDate()}`);
// console.log(listContacts());
console.log('getContactById!!!!!!',getContactById(1));
