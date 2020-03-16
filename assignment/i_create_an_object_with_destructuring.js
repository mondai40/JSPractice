// i) Destructure your object to create a new object, called “Person”, that only has name
// and email keys (and the corresponding values).

const Employee = require("./h_create_an_object");

const {department, startDate, ...Person} = Employee;
