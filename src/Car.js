"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.paint = function (color) {
        this.color = color;
    };
    Car.prototype.addSpare = function () {
        this.numSpares++;
    };
    Car.prototype.removeSpare = function () {
        this.numSpares--;
    };
    Car.prototype.cleanSeats = function () {
        console.log('seats are clean');
    };
    Car.prototype.addSeats = function (numSeats) {
        this.numSeats += numSeats;
    };
    Car.prototype.removeSeats = function (numSeats) {
        this.numSeats -= numSeats;
    };
    return Car;
}());
exports.Car = Car;
