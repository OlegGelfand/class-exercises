import {Backpack} from "./src/Backpack";
import {Car} from "./src/Car"
import {Computer} from "./src/Computer";
import {Person} from "./src/Person";
import {Bike} from "./src/Bike";
import {Classroom} from "./src/Classroom";
import {Monitor} from "./src/Monitor";
import {Options} from "./src/Options.enum";



// const backPack = new Backpack();
// const car =  new Car();
// const computer = new Computer();
// const person =  new Person();
// const classroom = new Classroom();
const monitor =  new Monitor();

monitor.setHeight(10);
monitor.setWidth(16);
const brandName = Options[0];


// console.log('opt', brandName)
monitor.setPixelHeight(1080);
monitor.setPixelWidth(1920);
monitor.getScreenSize();
monitor.getAspectRatio();
monitor.getTotalPixels()










// backPack.setShoeWeight(1);
// backPack.setShirtWeight(3);
// backPack.setPantsWeight(2);
// console.log(backPack.getTotalWeight());
//
// car.model= 'tesla';
// car.numSeats = 6;
// car.addSeats(3);
// console.log(car.numSeats);
//
// computer.speed = 20;
// computer.turnOn(200);
// computer.cpu = 'intel';
// computer.runSpeedTest(200);
// computer.upGradeSpeed(20)
//
// person.gender = "f";
// person.weight = 80;
// person.name = "Donald Trump";
// person.checkScale();
// person.feedUntilFull("cholent");
// person.feed("cholent");
// person.checkScale();


// person.feedUntilFull("cholent");
// person.checkScale(40);

// const bike1Diameter = 25;
// const bike1 = new Bike(bike1Diameter);
// const bike1Dist = bike1.getDistanceTraveled(2000);
// console.log(`Bike 1 traveled`, bike1Dist, `feet`);
//
// const bike2 = new Bike(10);
// bike2.setBikeProperties(30);
// const bike2Dist = bike2.getDistanceTraveled(3500);
// console.log(`Bike 2 traveled ${bike2Dist} feet`);


