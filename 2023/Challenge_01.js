import { message } from "./Datos/data.js"
function countAnimals() {
  const arrayAnimals = message.toLowerCase().split(" ");
  const uniqueAnimals = new Set(arrayAnimals);
  let stringContsAnimals = "";

  uniqueAnimals.forEach((uniqueAnimal) => {
    let cont = 0;
    arrayAnimals.forEach((animal) => {
      if (uniqueAnimal == animal) {
        cont++;
      }
    });
    stringContsAnimals += `${uniqueAnimal}${cont}`;
  });
  return stringContsAnimals
}

console.log(countAnimals());
