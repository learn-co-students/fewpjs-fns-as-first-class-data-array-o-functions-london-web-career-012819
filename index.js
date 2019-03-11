let wakeDog = function wakeDog(dogName="Byron", dogBreed="Poodle") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}

let leashDog = function leashDog(dogName="Byron", dogBreed="Poodle") {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`
}

let walkToPark = function walkToPark(dogName="Byron", dogBreed="Poodle") {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

let throwFrisbee = function throwFrisbee(dogName="Byron", dogBreed="Poodle") {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

let walkHome = function walkHome(dogName="Byron", dogBreed="Poodle") {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}

let unleashDog = function unleashDog(dogName="Byron", dogBreed="Poodle") {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`
}


const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


function exerciseDog (dogName, dogBreed) {
  const arr = routine.map(func => func(dogName, dogBreed))
  return arr
}
