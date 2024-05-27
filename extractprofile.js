// Create a function extractProfile(user) that takes an object user with properties name, age, city, and occupation (optional). Using destructuring, return a new object containing only the name and city properties.
function extractProfile(user){
   const {name, city} = user
    return {name, city}     
}

const user = {
    name: 'Alice',
    city: 'Kigali',
    occupation: 'Accountant',
    address:'KK24 Ave'
}

console.log(extractProfile(user))
