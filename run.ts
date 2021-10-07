import { Backpack } from "./src/Backpack";
import { Car } from "./src/Car"
import {Computer} from "./src/Computer";
import {Person} from "./src/Person";
const backPack = new Backpack();
const car =  new Car();
const computer = new Computer();
const person =  new Person();

backPack.setShoeWeight(1);
backPack.setShirtWeight(3);
backPack.setPantsWeight(2);
console.log(backPack.getTotalWeight());

car.model= 'tesla';
car.numSeats = 6;
car.addSeats(3);
console.log(car.numSeats);

computer.speed = 20;
computer.turnOn(200);
computer.cpu = 'intel';
computer.runSpeedTest(200);
computer.upGradeSpeed(20)

person.gender = "f";
person.weight = 80;
person.name = "Donald Trump";
person.checkScale();
person.feedUntilFull("cholent");
person.feed("cholent");
person.checkScale();


// person.feedUntilFull("cholent");
// person.checkScale(40);




