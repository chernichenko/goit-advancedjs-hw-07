class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: Key;

  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person) {
    if (this.door) {
      console.log('The person is coming in');
    } else {
      console.log('The door is closed');
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log('The door is now open');
    } else {
      console.log('Invalid key');
    }
  }
}

// Example usage
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};