
// Integer/Number to string
let fav = 7;
console.log(`NUMBER TO STRING ->
fav: ${fav}, type: ${typeof fav}`);

let strFav = String(fav);
console.log(`After conversion: ${strFav}, type: ${typeof strFav}\n`);

// string to number
let intFav = Number(strFav);
console.log(`STRING TO NUMBER
intFav: ${intFav}, type: ${typeof intFav}`);

let randomStr = "7Mag";
let invalidConversion = Number(randomStr);
console.log(`randomStr: ${randomStr}, type: ${typeof randomStr}`);
// value changes to NaN but type is number
console.log(`After conversion: ${invalidConversion}, type: ${typeof invalidConversion}\n`);

console.log("Type of NaN: ", typeof NaN, "\n");

// Boolean to number -> false: 0, true: 1
console.log(`BOOLEAN TO NUMBER ->
Boolean: ${true}, type: ${typeof true}`);
console.log(`Convert: ${Number(true)}, type: ${typeof Number(true)}\n`);

// Number to boolean -> 0: false, 1: true
console.log(`NUMBER TO BOOLEAN ->
Number: ${0}, type: ${typeof 0}`);
console.log(`Convert: ${Boolean(0)}, type: ${typeof Boolean(0)}\n`);

// NaN Conversions -> only gets converted in boolean
console.log(`NaN CONVERSIONS ->
Number: ${Number(NaN)},
String: ${String(NaN)},
Boolean: ${Boolean(NaN)}
`);

// undefined Conversions -> only gets converted in boolean
console.log(`undefined CONVERSIONS ->
Number: ${Number(undefined)},
String: ${String(undefined)},
Boolean: ${Boolean(undefined)}
`);

