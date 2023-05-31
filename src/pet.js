const MAX_FITNESS = 10;
const FITNESS_INCREMENT = 4;
const MIN_HUNGER = 0;
const HUNGER_INCREMENT = 3;
const HUNGER_THRESHOLD = 5;
const fitnessThreshold = 3;
const MAX_AGE = 30;
const MAX_HUNGER = 10;

// Pet prototype
function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = MIN_HUNGER;
  this.fitness = MAX_FITNESS;
  this.children = [];
}

// Checks if pet is alive
Pet.prototype = {
  get isAlive() {
    return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > 0;
  },
};

Pet.prototype.adoptChild = function (child) {
  this.children.push(child);
  return this.children;
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  } else {
    this.age += 1;
    this.hunger += HUNGER_INCREMENT;
    this.fitness -= FITNESS_INCREMENT;
  }
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  this.fitness = Math.min(this.fitness + FITNESS_INCREMENT, MAX_FITNESS);
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }
  this.hunger = Math.max(this.hunger - HUNGER_INCREMENT, MIN_HUNGER);
};

Pet.prototype.checkUp = function () {
  if (!this.isAlive) {
    return "Your pet is no longer alive :(";
  } else if (
    this.fitness <= fitnessThreshold &&
    this.hunger >= HUNGER_THRESHOLD
  ) {
    return "I am hungry AND I need a walk";
  } else if (this.fitness <= fitnessThreshold) {
    return "I need a walk";
  } else if (this.hunger >= HUNGER_THRESHOLD) {
    return "I am hungry";
  } else {
    return "I feel great!";
  }
};

module.exports = Pet;
