"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Backpack_1 = require("./src/Backpack");
var Car_1 = require("./src/Car");
var Computer_1 = require("./src/Computer");
var Person_1 = require("./src/Person");
var Teacher_1 = require("./src/Teacher");
var backPack = new Backpack_1.Backpack();
var car = new Car_1.Car();
var computer = new Computer_1.Computer();
var person = new Person_1.Person();
var teacher = new Teacher_1.Teacher();
teacher.studentName = "Bobby";
// teacher.addAssignment()
teacher.getTotalAssignments();
// teacher.addAssignment()
var subject = teacher.setAssignment('Math');
console.log(subject);
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
