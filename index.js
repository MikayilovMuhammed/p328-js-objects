// const inputs = document.querySelectorAll("input");
// const surname = document.querySelector(".surname");
// const age = document.querySelector(".age");

// const obj = {
//   firstname: "Xaliq",
//   surname: "Mammadov",
//   age: 22,
//   key: "s",
// };
// let name = "Salam";
// inputs.forEach((input) => {
//   input.addEventListener("change", function (e) {
//     //   console.log(e.target.name);
//     //   console.log(e.target.value);
//     const { name: inputName, value } = e.target;
//     console.log(inputName);
//     dynamicKey(inputName, value);
//     //   click(this.classList[0]);
//     //   alert(obj.firstname);
//   });
// });
// // surname.addEventListener("click", () => {
// //   console.log(this);
// //   //   click(this.classList[0]);
// // });
// // age.addEventListener("click", function () {
// //   click("age");
// // });

// // // console.log(obj.surname);
// // // console.log(obj["surname"]);

// function click(key) {
//   alert(obj[key]);
// }

// // click("age");

// const obj = new Object();
const obj = {
  name: "Samad",
  surname: "Musayev",
  age: 19,
  key: "s",
};

const { name: userName } = obj;

// console.log(userName);

const arr = [1, 5, 6, 10];
// const [firstNumber, ...rest] = arr;

// console.log(firstNumber);
// console.log(rest);

// obj.firstname = "5";
// obj.surname = "Mammadov";

// console.log("name" in obj);
// console.log(obj.surname);

// for (let key in obj) {
//   //   click(key);
//   console.log(obj[key]);
//   //   console.log(key);
// }

let user = { firstname: "Umid", surname: "Museyibli" };

// function dynamicKey(key, value) {
//   let student = { [key]: value };
//   console.log(student);
// }

// dynamicKey("age", 20);
// dynamicKey("firstname", "Umid");
// dynamicKey("surname", "Museybli");
// let student = { firstname: "Umid" };
user.firstname = "Samad";

// document.addEventListener("keydown", (e) => {
//   console.log(e);
// });

const testObj = {
  firstname: "Muha",
};

const firstname = "Test";

const { firstname: firstName } = testObj;

const testArr = [1, 3, 5];
// const firstIndex = testArr[0];
// const [0] =
// const [...samad] = testArr;

const testNumber = "5";

console.log(testNumber === 5);

function testFunc() {
  var tst = "dsfsdf";
  console.log(tst);
}

// let tst = "Salam";
// console.log(tst);
// let tstTwo = "Sagol";

// console.log(tst);
// console.log(tst);
// var tst = "dsfsdf";
// console.log(tst);
// console.log(tst);

// testFunc();

// console.log("firstName", samad);

// firstName

// console.log(testObj[name]);

// let a = 6;
// let b = a;
// a = 3;

// console.log(a);

const studentObj = {
  firstName: "Xaliq",
  surname: "Mammadov",
};

const newStudent = { ...studentObj };

// const newStudent = studentObj;
studentObj.firstName = "Rza";

console.log(newStudent);

// let tstTwo = 5;
// let spread = tstTwo;

// tstTwo = 6;

// console.log(tstTwo);
