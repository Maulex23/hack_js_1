/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
// let result = [];

let result = arr.slice(1, 3)
              .map(i => i.replace("a", "@"))
              .concat(arr[arr.length - 2].toUpperCase()); 


//export result
module.exports = result;