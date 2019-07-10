const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
});
describe('property', () => {
it('sets the name property',() => {
  const pet = new Pet('Fido');
  expect(pet.name).toEqual('Fido');
})
});

describe('growUp', () => {
it('has a initial age of 0', () => {
  const pet = new Pet('Fido');
  expect(pet.age).toEqual(0);
})
});

describe('growUp', () => {
it('increase pet age by 1', () => {
  const pet = new Pet('Fido');
  pet.growUp();
  expect(pet.age).toEqual(1);
})
});

describe('growUp', () => {
it('increase pet hunger by 5', () => {
const pet = new Pet('Fido');
pet.growUp();
expect(pet.hunger).toEqual(5);
})
});

describe('growUp', () => {
it('has a initial fitness of 10', () => {
  const pet = new Pet('Fido');
  expect(pet.fitness).toBe(10);
})
});

describe('growUp', () => {
it('it decreases fitness by 3', () => {
const pet = new Pet('Fido')
pet.growUp()
expect(pet.fitness).toEqual(7);
})
});

describe('walk', () => {
it('increases fitness by 4', () => {
const pet = new Pet('Fido')
pet.fitness = 5;
pet.walk();
expect(pet.fitness).toEqual(9);
})
});

describe('walk', () => {
it('increases fitness by to a maximum of 10', () => {
const pet = new Pet('Fido')
pet.fitness = 9;
pet.walk();
expect(pet.fitness).toEqual(10);
})
});

describe('feed', () => {
it('decreases pets hunger to a minimum of 0', () => {
const pet = new Pet('Fido')
pet.hunger = 2;
pet.feed();
expect(pet.hunger).toEqual(0);
})
});

describe('checkUp', () => {
it('checks if pet needs a walk', () => {
const pet = new Pet('Fido')
pet.fitness = 3;
expect(pet.checkUp()).toEqual('I need a walk');
})
});

describe('checkUp', () => {
it('checks if pet is hungry', () => {
const pet = new Pet('Fido')
pet.hunger = 8;
expect(pet.checkUp()).toEqual('I am hungry');
})
});

describe('checkUp', () => {
it('checks if pet is hungry and needs a walk', () => {
const pet = new Pet('Fido')
pet.hunger = 8;
pet.fitness = 3;
expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
})
});

describe('death', () => {
it('checks if pet is alive', () => {
const pet = new Pet ('Fido')
pet.fitness = 0;
expect(pet.isAlive).toEqual(false);
})
});

describe('death', () => {
it('checks if pet is alive', () => {
const pet = new Pet ('Fido')
pet.hunger = 10;
expect(pet.isAlive).toEqual(false);
})
});

describe('death', () => {
  it('checks if pet is alive', () => {
  const pet = new Pet ('Fido')
  pet.age = 30;
  expect(pet.isAlive).toEqual(false);
  })
});


