
/* ****************************** INTEGER COMPARISONS ****************************** */
console.log("Integer Comparisons:");
console.log(`77 > 7: ${77 > 7}`);         // true
console.log(`77 < 7: ${77 < 7}`);         // false
console.log(`77 >= 77: ${77 >= 77}`);     // true
console.log(`77 <= 78: ${77 <= 78}`);     // true

/* ****************************** STRING COMPARISONS ****************************** */
console.log("\nString Comparisons:");
console.log(`"apple" > "banana": ${"apple" > "banana"}`);   // false
console.log(`"apple" < "banana": ${"apple" < "banana"}`);   // true
console.log(`"apple" >= "apple": ${"apple" >= "apple"}`);   // true
console.log(`"apple" <= "banana": ${"apple" <= "banana"}`); // true
// It checks strings lexicographically based on Unicode values

/* ****************************** MIXED TYPE COMPARISONS ****************************** */
console.log("\nMixed Type Comparisons:");
console.log(`"5" > 3: ${"5" > 3}`);         // true
console.log(`"5" < 3: ${"5" < 3}`);         // false
console.log(`"05" >= 5: ${"05" >= 5}`);       // true
console.log(`"5" <= 6: ${"5" <= 6}`);       // true
console.log(`"5" != 6: ${"5" != 6}`);       // true
// JavaScript converts the string to a number for comparison
console.log(`"apple" > 3: ${"apple" > 3}`);   // false
console.log(`"apple" < 3: ${"apple" < 3}`);   // false
// Non-numeric strings convert to NaN, resulting in false comparisons

/* ****************************** BOOLEAN COMPARISONS ****************************** */
console.log("\nBoolean Comparisons:");
console.log(`true > false: ${true > false}`);   // true
console.log(`true < false: ${true < false}`);   // false
console.log(`true >= true: ${true >= true}`);   // true
console.log(`false <= true: ${false <= true}`); // true
console.log(`true <= 0: ${true <= 0}`); // false
console.log(`true == 1: ${true == 1}`); // true
console.log(`false >= 1: ${false >= 1}`); // false
console.log(`false == 0: ${false == 0}`); // true
// true is treated as 1 and false as 0 in comparisons

/* ****************************** NULL AND UNDEFINED COMPARISONS ****************************** */
console.log("\nNull and Undefined Comparisons:");
console.log(`null > 0: ${null > 0}`);         // false
console.log(`null < 0: ${null < 0}`);         // false
console.log(`null >= 0: ${null >= 0}`);       // true
console.log(`null <= 0: ${null <= 0}`);       // true
console.log(`null == 0: ${null == 0}`);       // false
// null is treated as 0 in comparisons but when there's equality check with 0, it returns false

console.log(`undefined > 0: ${undefined > 0}`);   // false
console.log(`undefined < 0: ${undefined < 0}`);   // false
console.log(`undefined >= 0: ${undefined >= 0}`); // false
console.log(`undefined <= 0: ${undefined <= 0}`); // false
console.log(`undefined == 0: ${undefined == 0}`); // false
// undefined is not converted to a number in comparisons, resulting in false

/* ****************************** STRICT CHECKS ****************************** */
console.log("\nStrict Checks:");
console.log(`"5" === 5: ${"5" === 5}`);       // false
console.log(`"5" !== 5: ${"5" !== 5}`);       // true
console.log(`null === undefined: ${null === undefined}`); // false
console.log(`null !== undefined: ${null !== undefined}`); // true
// Strict equality checks both value and type without type coercion
console.log(`true === 1: ${true === 1}`);     // false
console.log(`false === 0: ${false === 0}`);   // false
console.log(`true !== 1: ${true !== 1}`);     // true
console.log(`false !== 0: ${false !== 0}`);   // true
console.log(`null === 0: ${null === 0}`);     // false
console.log(`undefined === 0: ${undefined === 0}`); // false
console.log(`null !== 0: ${null !== 0}`);     // true
console.log(`undefined !== 0: ${undefined !== 0}`); // true
// Strict equality checks both value and type without type coercion
console.log(`NaN === NaN: ${NaN === NaN}`);   // false
console.log(`NaN !== NaN: ${NaN !== NaN}`);   // true
// NaN is not equal to anything, including itself
console.log(`NaN > 0: ${NaN > 0}`);           // false
console.log(`NaN < 0: ${NaN < 0}`);           // false
console.log(`NaN >= 0: ${NaN >= 0}`);         // false
console.log(`NaN <= 0: ${NaN <= 0}`);         // false
// Any comparison with NaN results in false

/* ****************************** SUMMARY ****************************** */
console.log("\nSummary:");
console.log("JavaScript uses type coercion in non-strict comparisons, converting types as needed.");
console.log("Strict comparisons (=== and !==) do not perform type coercion and check both value and type.");
console.log("Special cases like null, undefined, and NaN have unique behaviors in comparisons.");


/* ********************************************************************* */