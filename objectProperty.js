
const studentName = [];
const students = [
    {id: 21, name: "shahriar jalal"},
    {id: 32 , name: "jubayer"},
    {id: 41, name: "ahmed"},
    {id: 71, name: "shakhawat"}
];
// console.log(students[0].name);
// for(let i = 0 ; i < students.length ; i++) {
//     const stName = students[i].name;
//     studentName.push(stName); 
// }

const names = students.map(s => s.name)
const Ids = students.map( s => s.id);
const bigger = students.filter(s=> s.id > 30);
const biggerOne = students.find(s => s.id > 30);

console.log(names);
console.log(Ids);
console.log(bigger);
console.log(biggerOne);