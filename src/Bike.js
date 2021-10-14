"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.setBike1Properties = function (bike1Diameter) {
        this.bike1Diameter = bike1Diameter;
    };
    Bike.prototype.getDistanceTraveled = function (bike1Dist) {
        var bike1Distance = this.bike1Diameter * this.bike1Dist;
        console.log("Bike1 traveled", bike1Distance, "feet.");
    };
    return Bike;
}());
exports.Bike = Bike;
