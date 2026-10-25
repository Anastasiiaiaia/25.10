let person = {
    name: "Alex", age: 17, isStudent: true
};
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
let num = Math.random() * 100 + 1;
console.log(num);
console.log(Math.floor(num));
console.log(Math.ceil(num));

let number = "42.7";
console.log(parseInt(number));
console.log(parseFloat(number));

let value = "abc";
let nvalue = Number(value);
console.log(nvalue);
console.log(isNaN(nvalue));

let passwordLength = 8;
let symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let password = "";

for (let i = 0; i < passwordLength; i++) {
    let ind = Math.floor(Math.random() * symbols.length);
    password += symbols[ind];
}
console.log(password);

let dateNow = new Date();
let date = dateNow.toLocaleDateString();
let time = dateNow.toLocaleTimeString();
console.log("Hello! Today is " + date + " and now it is " + time);

let celsius = prompt("Enter temperature: ");
let fahrenheit = Number(celsius) * 9 / 5 + 32;
console.log(fahrenheit);