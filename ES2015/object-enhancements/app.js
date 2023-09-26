function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

/* Write an ES2015 Version */
const myCreateInstructor = (firstName, lastName) => ({firstName, lastName})





var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

/* Write an ES2015 Version */

let favoriteNumber = 42;
const instructor = {
    firstName : "Colt",
    [favoriteNumber] : "That is my favorite!"
}





var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

/* Write an ES2015 Version */
const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}


const createAnimal = (species, verb, noise) => ({
    species,
    [verb](){
        return noise;
    }
})

