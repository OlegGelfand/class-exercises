"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.turnOn = function (speed) {
        var startUpTime = 80 - Math.floor(this.speed * .8) + 20;
        console.log("this computer started up at", startUpTime, "seconds");
    };
    Computer.prototype.runSpeedTest = function (speed) {
        var startUpTimeSpeedTest = 270 - Math.floor((this.speed - 1) * 100 / 99 * 2.7) + 30;
        console.log("test results show that this", this.cpu, "processor", startUpTimeSpeedTest, "seconds");
    };
    Computer.prototype.upGradeSpeed = function (speedIncrease) {
        this.speed = speedIncrease + 20;
        console.log("the computer speed is now", this.speed);
    };
    return Computer;
}());
exports.Computer = Computer;
