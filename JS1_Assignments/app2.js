/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define*/

    
    
    


var Employee = {
    
    name: "Name :Sandeep Singh",                           // Defining the Object with the details
    storeName : "Store : Van Heusen",
    age : 29,
    salary : 30000,

    address: {                                         // Defining the nested object within Employee
 
        cityName : "Bengaluru",
        state : "Karnataka",
        pincode: "560078"
    }
         

};

console.log(Employee.name);
console.log(Employee.storeName);
console.log(Employee.age);
console.log(Employee.salary);
console.log(Employee.address.cityName);
console.log(Employee.address.state);
console.log(Employee.address.pincode);