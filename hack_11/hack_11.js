/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

result = result.concat(numberArray, stringArray);


for (let i = 0; i < result.length; i++) {
  if (typeof result[i] === "number" && (i === 0 || i % 2 === 0)) {
    switch (result[i]) {
      case 1:
        result[i] = "one";
        break;
      case 3:
        result[i] = "three";
        break;
      case 5:
        result[i] = "five";
        break;
    }
  }
}


for (let i = 0; i < result.length; i++) {
  if (typeof result[i] === "string") {
    switch (result[i]) {
      case "foo":
        result[i] = "f00";
        break;
      case "bar":
        result[i] = "Bar";
        break;
      case "baz":
        result[i] = "b@z";
        break;
      case "qux":
        result[i] = "quX";
        break;
      case "echo":
        result[i] = "3ch0";
        break;
    }
  }
}


result.unshift("h@ck");
result.push("h@ck");
result.splice(Math.floor(result.length/2), 0, "h@ck");

//export result
module.exports = result;