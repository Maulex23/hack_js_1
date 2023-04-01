/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
// let result = [];

let result = arr.map(str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

//export result
module.exports = result;