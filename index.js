// Object Oriented Programming
let offspring = 0;

const animals = [
  {
    feathers: true,
    mammal: false,
    size: 100,
    name: "flamingo",
    sound: "croak",
    makeSound: makeSound,
    reproduce: reproduce,
    offspring,
    survivalRate: 20
  },
  {
    feathers: false,
    mammal: true,
    size: 250,
    name: "mr. dolphin",
    sound: "iiii",
    makeSound,
    reproduce,
    offspring,
    survivalRate: 70
  },
  {
    feathers: false,
    mammal: true,
    size: 20,
    name: "Lana",
    sound: "wuff",
    makeSound,
    reproduce,
    offspring,
    survivalRate: 95
  },
  {
    feathers: true,
    mammal: false,
    size: 15000,
    name: "Reminator (T-Rex)",
    sound: "mim",
    makeSound,
    reproduce,
    offspring,
    survivalRate: 50
  }
];

// Functions placeholders to be used inside each object of the animals array
function makeSound() {
  console.log(`I'm ${this.name} and I am ${this.size / 100}m big`);
  console.log(`${this.sound}${this.sound}`);
}
// function reproduce() {
//   if (this.feathers) {
//     console.log(`My name is ${this.name} and I cracked up an egg`);
//   } else {
//     console.log(`My name is ${this.name} and I was born ready`);
//   }
// }
function reproduce() {
  let randomNum = Math.floor(Math.random() * 100);
  if (randomNum < this.survivalRate) {
    this.offspring++;
    console.log(
      `My name is ${this.name} and I will survive!
      Random = ${randomNum} < ${this.survivalRate}
      Offspring = ${this.offspring}`
    );
  } else {
    console.log(
      `My name is ${this.name} and I'm gonna die :'( ... 
        Random = ${randomNum} > ${this.survivalRate}`
    );
  }
}

animals.forEach(animal => {
  animal.reproduce();
});

// function displayAnimalProps(animalArray, propToDisplay) {
//   animalArray.forEach(animal => console.log(animal[propToDisplay]));
// }
// displayAnimalProps(animals, "name");

// function makeSound() {
//   console.log(`I'm ${this.name} and I am ${this.size / 100}m big`);
//   console.log(`${this.sound}${this.sound}`);
//   console.log("");
// }
// makeSound.call(animals[0]);

// function reproduce(animalArray) {
//   //return egg / baby
//   animalArray.forEach(animal =>
//     animal.feathers
//       ? console.log(`My name is ${animal.name} and I cracked up an egg`)
//       : console.log(`My name is ${animal.name} and I was born ready`)
//   );
// }
//reproduce(animals);

// 1. Create a variable 'offspring' with a default value (outside of the object)
// 2. Assign that value to the animal object with the shorthand property notation
// 3. Assign a property 'survivalRate' to each animal (percentage or just number)
// 4. On calling animal.reproduce(); create a random number and check if the new offspring survives
// 4.2 If the offspring doesn't survive, display a message
// 4.3 Else, increase the offspring count and display a message with the new offspring count
