// Write your solution in this file!
// Initialize the employee Object
const employee = {
    name: "Aisha",
    streetAddress: "1234 Nairobi",
};

// Function to update employee non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// Function to update employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key from employee non-destructively
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete a key from employee destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

console.log("Original Employee:", employee);

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Anita");
console.log("Updated Employee (non-destructive):", updatedEmployee);

console.log("Original Employee (unchanged):", employee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm Street");
console.log("Updated Employee (destructive):", employee);

const employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
console.log("Employee without Name (non-destructive):", employeeWithoutName);

console.log("Original Employee (unchanged):", employee);

destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee without Street Address (destructive):", employee);
