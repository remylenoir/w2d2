class Building {
  constructor(color) {
    this.type = "hut";
    this.height = 150;

    if (color) {
      this.color = color;
    } else {
      this.color = "brown";
    }
  }

  addFloor() {
    this.height += 150;
    if (this.height > 1000) {
      console.log(
        "You dont have the required technology to build that high. Your building just collapsed"
      );
      this.height = 0;
    }
    console.log(
      "I just added another floor. The new height of this building is " + this.height / 100 + " m."
    );

    if (this.height > 500) {
      this.type = "mudscraper";
    }
  }
}

// 1.
// const firstBuilding = new Building()
// const secondBuilding = new Building()

// firstBuilding.color = 'white'
// console.log('firstBuilding', firstBuilding)
// console.log(firstBuilding.height)

// 2. constructor parameters
const customBuilding = new Building("yellow");
const customBuildingTwo = new Building("red");
const defaultBuilding = new Building();

// customBuilding.addFloor()
// customBuilding.addFloor()
// customBuilding.addFloor()
// customBuilding.addFloor()
// customBuilding.addFloor()
// customBuilding.addFloor()

// defaultBuilding.addFloor()

// console.log('customBuilding', customBuilding)
// console.log('customBuildingTwo', customBuildingTwo)
// console.log('defaultBuilding', defaultBuilding)

// 3. Inheritance
class Animal {
  constructor(mammal = true, size = 100, feathers = false) {
    this.mammal = mammal;
    this.size = size;
    this.feathers = feathers;
  }
}

class Bird extends Animal {
  constructor(size, color, continent) {
    super(false, size, true);
    this.color = color;
    this.continent = continent;
  }
}

class Mammal extends Animal {
  constructor(size, nursingTime, hairColor) {
    super(true, size);

    this.nursingTime = nursingTime;
    this.hairColor = hairColor;
  }
}

// const bird = new Animal(false, 50, true)
// const mammal = new Animal()
// console.log('bird', bird)
// console.log('mammal', mammal)

const bird = new Bird(50, "yellow", "Africa");
console.log("bird", bird);

const lana = new Mammal(20, "4months", "whiteish");
console.log("lana", lana);

console.log(lana instanceof Mammal); // true
console.log(lana instanceof Bird); // false
console.log(lana instanceof Animal); // true
