const constantValue = 7;    // Can't be changed further
let name = "Manav";
var surname = "Goswami";
number = 4723920298;

/* 
Variales declared using 'var' inside a specific scope, can also be accessible outside that scope.
While 'let' variables are not accessible outside the scope.
*/
{
  let name2 = "abc";
  var surname2 = "xyz";
  number2 = 777;
}


console.log(constantValue);

console.table([constantValue, name, surname, number]);
console.table([constantValue, surname2, number2]);
