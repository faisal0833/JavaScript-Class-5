// // 1. JavaScript Ternary Operator
// // If else example
// let age = 15;
// if (age >= 18) {
//     console.log("you are full age.");
// } else {
//     console.log("you are not full age.");
// }

// // Ternary Operator
// age >= 18
// ? console.log("you are full age.")
// : console.log("you are not full age.");

// // Example 2
// let food;
// if(age > 12) {
//     food = "Chicken";
// } else {
//     food = "Ice Cream";
// }
// console.log(`He like to eat ${food}`);

// console.log(`He like to eat ${age>12 ? "Chicken" : "Ice Cream"}`);

//---------------------------------------------------------------------

// // 2. JavaScript Function
// // Example 1
// function showText() {
//     console.log("Some Text!");
// }
// showText();
// showText();

// // Example 2
// function showName(name) {
//     console.log(name);
// }
// showName("Faiza");
// showName("Faisal");
// showName("Asif");

// // Example 3
// function calculateNumber(n1, n2) {
//     console.log(n1 * n2);
// }
// calculateNumber(5, 3);
// calculateNumber(1000, 500565);

// // Example 4
// function averageMark(s1, s2, s3, s4, s5) {
//     console.log((s1 + s2 + s3 + s4+ s5) / 5);
// }
// averageMark(88, 75, 92, 77, 86);

function averageMark(s1, s2, s3, s4, s5) {
    const average = (s1 + s2 + s3 + s4+ s5) / 5;
    return average;
}
// A Mark
const aAverageMark = averageMark(88, 75, 92, 77, 86);
console.log(aAverageMark);

// B Mark
const bAverageMark = averageMark(90, 77, 80, 82, 65);
console.log(bAverageMark);

// C Mark
const cAverageMark = averageMark(99, 88, 85, 82, 97);
console.log(cAverageMark);

console.log(aAverageMark, bAverageMark, cAverageMark);