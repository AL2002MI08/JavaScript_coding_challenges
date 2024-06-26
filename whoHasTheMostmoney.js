// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

// class Student {
//   constructor(name, fives, tens, twenties) {
//     this.name = name;
//     this.fives = fives;
//     this.tens = tens;
//     this.twenties = twenties;
//   }
// }
// As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

// Notes:

// Each student will have a unique name
// There will always be a clear winner: either one person has the most, or everyone has the same amount
// If there is only one student, then that student has the most money
const mostMoney = s => {
  s.sort((a,b) => sum(b) - sum(a))
  if(s.length > 1 && sum(s[0]) === sum(s[1])) return  'all';
  return s[0].name;
}
const sum = s => (s.fives*5) + (s.tens*10) + (s.twenties*20);

const people = [
  { fives: 2, tens: 1, twenties: 0, name: 'Alice' },
  { fives: 0, tens: 3, twenties: 2, name: 'Bob' },
  { fives: 0, tens: 3, twenties: 2, name: 'Charlie' }
];
console.log(mostMoney(people))
