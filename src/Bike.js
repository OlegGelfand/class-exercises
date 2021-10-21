"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
var Bike = /** @class */ (function () {
    /**
     *
     * @param bikeDiameter measured in inches
     */
    function Bike(bikeDiameter) {
        this.bikeDiameter = bikeDiameter;
    }
    Bike.prototype.setBikeProperties = function (bikeDiameter) {
        this.bikeDiameter = bikeDiameter;
    };
    /**
     * Returns distance in feet.
     * @param numRotations
     */
    Bike.prototype.getDistanceTraveled = function (numRotations) {
        return Math.round(this.bikeDiameter * Math.PI * numRotations / 12);
    };
    return Bike;
}());
exports.Bike = Bike;
