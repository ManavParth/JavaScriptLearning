// Data Types in JS

let userName = "Mag";
let number1 = 7;
let number2 = 7.7;
let bool = true;
let nullObj = null;
let udf1 = undefined;
let udf2;

let values = {
  [typeof userName]: userName,
  [typeof number1]: number1,
  // [typeof number2]: number2,
  [typeof bool]: bool,
  [typeof nullObj]: nullObj,
  [typeof udf1]: udf1,
  [typeof udf2]: udf2
}

console.table(values);

console.log("Is udf1 = udf2 ? -> ", udf1===udf2);
console.log("typeof null -> ", typeof null);
console.log("is null an object? -> ", (typeof null)===(typeof values));

/************************* OPERATIONS ****************************/

console.log("\n| OPERATIONS IN JAVASCRIPT |\n");

console.log("STRING CONCATENATION ->");
console.log(`"7" + 7: ${"7" + 7},
7 + "7": ${7 + "7"},
7 + "7" + 7: ${7 + "7" + 7},
"7" + 7 + 7: ${"7" + 7 + 7},
7 + 7 + "7": ${7 + 7 + "7"}
=======================\n`);

// Boolean to integer
console.log(`BOOLEAN TO INTEGER -->
+true: ${+true}, +false: ${+false}\n`);

// string to integer
console.log(`STRING TO INTEGER -->
+"": ${+""}, +"mag": ${+"false"}, +" ": ${+" "}\n`);

// increment and decrement operator
let num = 7;
console.log("Num: ", num);
console.log(`INCREMENT OP -> pre: ${++num}, post: ${num++}`);
console.log(`DECCREMENT OP -> pre: ${--num}, post: ${num--}`);

// pre: it first does the operation then you can use it
// post: first use it then does the operation