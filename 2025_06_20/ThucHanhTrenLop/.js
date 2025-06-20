var x = 10;
function myFnc(){
  console.log(x); /* output: 10, x có ảnh hưởng tới Function */
}
console.log(x); /* output: 10, x có ảnh hưởng khắp nơi */
myFnc();




let x = 10;
if (x === 10) {
  let x = 20; /* x được let với giá trị mới là 20 */
  console.log(x); /* output: 20, giá trị mới chỉ có tác dụng trong if */
}
console.log(x);  /* output: 10, x bên ngoài if, nên không bị ảnh hưởng giá trị mới */

const x = 10;
console.log(x);  /* output: 10 */
if (x === 10) {
  x = 20;
  console.log(x); /* output: Error */
}





function member(name) {
  name = name || "Guess";
  return name;
}
console.log(member()); /* ouput: Guess */
console.log(member("Dương Minh Trí")); /* ouput: "Dương Minh Trí" */




const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];
console.log(newArray); /* ouput: [1, 2, 3, 4, 5] */




const oldObject = {
  name: 'Dương Minh Trí'
};

const newObject = {
  ...oldObject,
  age: 4
};

console.log(newObject); /* ouput: {name: "Dương Minh Trí", age: 4} */



function number(num1, num2, ...numOther){
  console.log("x:", num1); 
  console.log("y:", num2);
  console.log("Other number:", numOther);
}
number("one", "two", "three", "four", "five", "six");
/* ouput: 
x: one
y: two
Other number: (4) ["three", "four", "five", "six"] */



const myObject = {
 name: "Dương Minh Trí",
 age: 4
}

const {name, age} = myObject;
console.log(name); /* output: "Dương Minh Trí" */
console.log(age); /* output: 4 */
console.log(myObject); /* output: {name: "Dương Minh Trí", age: 4} */



var member = () => {
    console.log("Dương Minh Trí");
}
member(); /* output: "Dương Minh Trí" */


class Member {
  constructor() {
    this.name = "Dương Minh Trí";
  }

  memberName() {
    return this.name;
  }
}
var x = new Member();
console.log(x.memberName()); /* ouput: "Dương Minh Trí" */