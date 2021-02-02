
const numbers = [1,2,3,4,5,10,15,20];

// function square(element) {
//     return element * element;
// }

// const result = numbers.map(function(element,index,array) {
//     return element * element;
// })
// const result = numbers.map(x => x * x);
// console.log(result);
const bigger = numbers.filter(x => x > 5);
const isThere = numbers.find(x => x > 5)
console.log(bigger);
console.log(isThere);