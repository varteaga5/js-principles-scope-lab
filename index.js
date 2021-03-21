// Write your solution in this file!
const leastFavoriteCustomer = 'joe';
var customerName = 'bob';
// 1) returns the customerName

function upperCaseCustomerName() {
// 2) modifies the customerName variable
    customerName = customerName.toUpperCase();
    return customerName

}
function setBestCustomer() {
// 3) setBestCustomer
bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
// 4) overwrites the best customer
bestCustomer = 'maybe bob';
}
function changeLeastFavoriteCustomer() {
// 5) unsuccessfully tries to reassign the least favorite customer
leastFavoriteCustomer = 'tim';
}