/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define*/

//Declaring the array of nested objects, Address is nested inside the object.
var Employee = [ {name: "Sandeep Singh", age : 29, storeName: "Vanheusen", address: {city: "Bengaluru", pin: "560029", state: "Karnataka"}}, {name: "Mahendra Sewda", age : 28, storeName: "Puma", address: {city: "Bengaluru", pin: "560078", state: "Karnataka"}}, {name: "Rishi Sachdeva", age : 25, storeName: "H&M", address: {city: "Bengaluru", pin: "560019", state: "Karnataka"}}, {name: "Ehsaas Maan", age : 27, storeName: "Reebok", address: {city: "Bengaluru", pin: "560069", state: "Karnataka"}}, {name: "Rohit Sachdeva", age : 29, storeName: "Nike", address: {city: "Bengaluru", pin: "560109", state: "Karnataka"}}];

//Retrieving the Information for one of the objects on Console

console.log(Employee[3].name);
console.log(Employee[3].age);
console.log(Employee[3].storeName);
console.log(Employee[3].address.city);
console.log(Employee[3].address.pin);
console.log(Employee[3].address.state);