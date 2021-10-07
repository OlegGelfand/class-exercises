"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backpack = void 0;
var Backpack = /** @class */ (function () {
    function Backpack() {
    }
    Backpack.prototype.getTotalWeight = function () {
        // const totalWeight = this.shoeWeight + this.shirtWeight + this.pantsWeight
        return (2 * this.shoeWeight) + this.shirtWeight + this.pantsWeight;
    };
    Backpack.prototype.setShoeWeight = function (weight) {
        this.shoeWeight = weight;
    };
    Backpack.prototype.setShirtWeight = function (weight) {
        this.shirtWeight = weight;
    };
    Backpack.prototype.setPantsWeight = function (weight) {
        this.pantsWeight = weight;
    };
    return Backpack;
}());
exports.Backpack = Backpack;
