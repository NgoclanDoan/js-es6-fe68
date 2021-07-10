/**
 * Khai báo biến
 * - Khai báp biến với let và const
 * + var: có hoisting, function scope.
 * + let: không có hoisting, block scope
 * + const: không có hoisting, block scope, bắt buộc phải gán giá trị khi khai báo và không được re-assign giá trị
 * - So sánh giữa var vs let vs const (sẽ có sự khác nhau về hoisting, scope)
 * - Nên dùng cái nào trong trường hợp nào?
 * + var: khi browser không hỗ trợ (let, const)
 * + let: khi cần re-assign giá trị
 * + const: khi không cần re-assign giá trị
 */

//*1. var
// console.log(fullName); //work (undefined) => hoisting
// var fullName = 'Doan thi ngoc lan';
// age = 18; // work (không cần dùng từ khóa khai báo, mặc định là var)
// console.log(fullName, age);
//
// function showErrorWithVar() {
//     var isError = true;
//     var error = '';
//
//     if (isError) {
//         var error = 'Something went wrong!';
//         console.log(error); // 1. 'Something went wrong!'
//     }
//     console.log(error); //2.'Something went wrong!'
//     console.log(fullName); //? work
// }
// showErrorWithVar();

//*2. let
// console.log(age); //! không có hoisting (Err: Cannot access 'age' before initalization)
// let age = 18;
// console.log(age); // 18
// let age = 19;
// console.log(age); //! (Err: Uncaught SyntaxError: Identifier 'age' has already been declared)
// function showErrorWithLet() {
//     let isError = true;
//     let error = '';
//
//     if (isError) {
//         let error = 'Something went wrong!';
//         console.log(error); // 1. 'Something went wrong!'
//     }
//     console.log(error); //2.''
// }
// showErrorWithLet();

//*3. const
// console.log(birthYear); //! Không có hoisting
// const birthYear = 2000;
// const birthYear; //! Error => bắt buộc phải gán giá trị khi khai báo
// function showErrorWithConst() {
//     const isError = true;
//     const error = '';
//
//     if (isError) {
//         const error = 'Something went wrong!';
//         console.log(error); // 1. 'Something went wrong!'
//     }
//     console.log(error); //2.''
// }
// showErrorWithConst();

/**
 * Function
 ** - Arrow fucntion
 * - So sánh declaration vs expression (normal function) vs arrow function (cú pháp, con trỏ this)
 * - Trường hợp nên và không nên dùng arrow func?
 * + Không nên dùng arrow func làm 1 phương thức của fuc.
 * + Nếu không có outer func thì this = global object (window)
 * + Không dùng arrow func làm phương thức của object.
 * + Không dùng arrow func làm func contructor.
 */

//Normal func
// const calcAgeNormal = function (birthYear) {
//     console.log(this); // this = global object (window)
//     console.log(2021 - birthYear);
// };
// calcAgeNormal('2020');

//Arrow func
/**
 * - Không định nghĩa bối cảnh thực thi (this) của riêng nó
 * - Không quan tâm nó được thực thi trong ngữ cảnh nào, giá trị this của arrow func = this của outer func.
 *
 */
// const calcAgeArrow = (birthYear) => {
//     console.log(this);
//     return 2021 - birthYear;
// };
// calcAgeArrow('2020');
//
// const calcAgeArrowShort = (birthYear) => 2021 - birthYear;
//
// const calcAgeArrowOneParam = (birthYear) => 2021 - birthYear;
//
// const getEle = (id) => document.getElementById(id);

// const student = {
//     name: 'Tay',
//     birthYear: 2000,
//     calcAgeNormal: function () {
//         console.log('calcAgeNormal', this); // calcAgeNormal {name: "Tay", birthYear: 2000, calcAgeNormal: ƒ}
//         console.log(2021 - this.birthYear);
//
//         const checkAgeArrow = () => {
//             if (2021 - this.birthYear >= 18) {
//                 console.log('You are old enough!');
//             } else {
//                 console.log('You are not old enough!');
//             }
//         };
//
//         // const checkAgeNormal = function () {
//         //     if (2021 - this.birthYear >= 18) {
//         //         console.log('You are old enough!');
//         //     } else {
//         //         console.log('You are not old enough!');
//         //     }
//         // }.bind(student);
//         // const _this = this;
//         // const checkAgeNormal = function () {
//         //     if (2021 - _this.birthYear >= 18) {
//         //         console.log('You are old enough!');
//         //     } else {
//         //         console.log('You are not old enough!');
//         //     }
//         // };
//
//         checkAgeArrow();
//     },
//     calcAgeArrow: () => {
//         console.log(this);
//         console.log(2021 - this.birthYear); //! NaN
//     },
// };
// student.calcAgeNormal();
// student.calcAgeArrow();

//! People is not a constructor
// const People = () => {};
// const person = new People();

/**
 * *Default Parameter
 */
// const withoutDefaultParam = (typeOfUser) => {
//     if (typeOfUser === 'user') {
//         console.log('Redirect to user page!');
//     } else {
//         console.log('Redirect to admin page!');
//     }
// };
// withoutDefaultParam('user');

// const withDefaultParam = (typeOfUser = 'user') => {
//     if (typeOfUser === 'user') {
//         console.log('Redirect to user page!');
//     } else {
//         console.log('Redirect to admin page!');
//     }
// };
// withDefaultParam();

/**
 * *Destructuring
 * - Destructure Array
 * - Destructure Object
 */
//Array
// Without Destructuring
// const students = ['Tay','Y','Vy'];
// const tay = students[0];
// console.log(tay);

// With Destructuring
// const students = ['Tay', 'Y', 'Vy'];
// const [tay, y, vy] = students;
// const [tay,,vy] = students;
// console.log(tay, y, vy);

//Object
// Without Destructuring
// const student = {
//     fullName: 'doan thi ngoc lan',
//     age: 18,
//     class:'bc12'
// }
// const fullName = student.fullName;
// console.log(fullName);

//With Destructuring
// const student = {
//     fullName: 'doan thi ngoc lan',
//     age: 18,
//     class: 'bc12',
// };
// const { age, fullName, class: className } = student; //! class bị trùng tên với javascript => đổi tên bằng ':'
// console.log(fullName, age, className);

/**
 * *Template String
 */
// const fullName = 'ngoc lan';
// const str = 'My name is ' + fullName;
// const templateStr = `My name is ${fullName}`;

/**
 * *Enhanced Object Literals (Shorthand syntax) cho object
 */
// const age = 18;
// const person = {
//     fullName: 'dona thi ngoc lan',
//     age: age,
//     calcAge: function () {
//
//       }
// }
// const enhancedPerson = {
//     fullName: 'doan thi ngoc lan',
//     age, //! Khi key & value bằng nhau age:age
//     calcAge(){
//
//     }
// }

/**
 * *Rest parameter: toán tử '...', bản chất là các giá trị trong mảng
 */
// const calcSumWithoutRestParam = (num1, num2, num3) => console.log(num1 + num2 + num3);
// calcSum(1, 2, 3);

const calcSumWithRestParam = (...nums) => {
    console.log(nums);
    let sum = 0;
    nums.forEach((num) => {
        sum += num;
    });
    console.log(sum);
};
calcSum(1, 2, 3, 4, 5, 6, 7);
