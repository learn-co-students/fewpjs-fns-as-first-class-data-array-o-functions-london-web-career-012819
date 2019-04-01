console.log("Wake Byron the poodle");
console.log(" Byron the poodle");
console.log("Walk to the park with Byron the poodle");
console.log("Throw the frisbee for Byron the poodle");
console.log("Walk home with Byron the poodle");
console.log("Unleash Byron the poodle");

function wakeDog(dogName, dogBreed) {
  const text = `Wake ${dogName} the ${dogBreed}`
  console.log(text);
  return text
}
function leashDog(dogName, dogBreed) {
  const text = `Leash ${dogName} the ${dogBreed}`
  console.log(text);
  return text
}
function walkToPark(dogName, dogBreed) {
  const text = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(text);
  return text
}
function throwFrisbee(dogName, dogBreed) {
  const text = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(text);
  return text
}
function walkHome(dogName, dogBreed) {
  const text = `Walk home with ${dogName} the ${dogBreed}`
  console.log(text);
  return text
}
function unleashDog(dogName, dogBreed) {
  const text = `Unleash ${dogName} the ${dogBreed}`
  console.log(text);
  return text
}
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  let newArray = []
  for (const i in routine) {
    newArray.push(routine[i](dogName, dogBreed))
  }
  return newArray
}
