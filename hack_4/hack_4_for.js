/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

for(i = 0; i < 8; i++) {
    if(i % 2 == 0) continue;
    result.push(i)
}

//export result
module.exports = result;

