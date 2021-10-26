"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Monitor_1 = require("./src/Monitor");
var Options_enum_1 = require("./src/Options.enum");
// const backPack = new Backpack();
// const car =  new Car();
// const computer = new Computer();
// const person =  new Person();
// const classroom = new Classroom();
var monitor = new Monitor_1.Monitor();
monitor.setHeight(10);
monitor.setWidth(16);
var brandName = Options_enum_1.Options[0];
// console.log('opt', brandName)
monitor.setPixelHeight(1080);
monitor.setPixelWidth(1920);
monitor.getScreenSize();
monitor.getAspectRatio();
monitor.getTotalPixels();
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
