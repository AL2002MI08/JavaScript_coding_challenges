// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

const compareObjects = (obj1, obj2) =>{
  return  Object.keys(obj2).every(key => obj1.hasOwnProperty(key) && obj1[key] === obj2[key])
}
console.log(compareObjects({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }))
console.log(compareObjects({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }))