// sort
const arr = [9, 8, 5, 4, 2, 6, 42];
// var, let
arr.sort((num1, num2) => {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  }
  return 0;
});

console.log(arr);

const students = [
  { name: "John", totalMarks: 490 },
  { name: "Sam", totalMarks: 492 },
  { name: "Danial", totalMarks: 497 },
  { name: "Emilie", totalMarks: 488 },
  { name: "Anderson", totalMarks: 495 },
];
// sort the arr by larget to lowest totalmarks
students.sort((a, b) => {
  if (a.totalMarks > b.totalMarks) {
    return -1;
  } else if (a.totalMarks < b.totalMarks) {
    return 1;
  }
  return 0;
});

// sort the arr by lowest to largest totalmarks
// students.sort((a, b) => {
//   if (a.totalMarks > b.totalMarks) {
//     return -1;
//   } else if (a.totalMarks < b.totalMarks) {
//     return 1;
//   }
//   return 0;
// });

console.log(students);

// slice

const arrTwo = [5, 4, 3, 2, 1];

arrTwo.slice(2, 4);
// O/P: [3, 2]

// splice
const arrThree = [5, 4, 3, 2, 1];

// remove the index 2, 3
arrThree.splice(2, 2);
// O/P: [3, 2] gets removed

// arrThree --> [5, 4, 1]

const students = [
  { name: "John", totalMarks: 490 },
  { name: "Sam", totalMarks: 492 },
  { name: "Danial", totalMarks: 497 },
  { name: "Emilie", totalMarks: 488 },
  { name: "Anderson", totalMarks: 495 },
];

// Filter only the students who has scored more than 490
console.log(
  students.filter((student) => {
    return student.totalMarks > 490;
  })
);
