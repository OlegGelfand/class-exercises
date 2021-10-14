"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basement = void 0;
var basementDefaults = {
    numOutlets: 0,
    numCircuits: 0,
};
var Basement = /** @class */ (function () {
    function Basement() {
        this.numOutlets = basementDefaults.numOutlets;
        this.numCircuits = basementDefaults.numCircuits;
        this.maxCircuits = 10;
        this.maxOutletsPerCircuit = 6;
    }
    Basement.prototype.addCircuit = function () {
        if (this.numCircuits < this.maxCircuits) {
            this.numCircuits++;
        }
        else {
            console.log("you have maximized your circuits");
        }
    };
    Basement.prototype.addOutlet = function () {
        if (this.numOutlets < this.numCircuits * this.maxOutletsPerCircuit) {
            this.numOutlets++;
        }
        else {
            console.log("Circuits full!! Add another circuit prior to adding more outlets.");
        }
    };
    Basement.prototype.addOutlets = function (numOutlets) {
        var currentNumOutlets = this.numOutlets;
        if (currentNumOutlets < this.numCircuits * this.maxOutletsPerCircuit && currentNumOutlets + numOutlets <= this.maxOutletsPerCircuit * this.numCircuits) {
            this.numOutlets += numOutlets;
            console.log("you now have ", this.numOutlets, "installed");
        }
        else if (currentNumOutlets < this.numCircuits * this.maxOutletsPerCircuit && currentNumOutlets + numOutlets > this.maxOutletsPerCircuit * this.numCircuits) {
            console.log("you are requesting to install ", numOutlets, " outlets, you have an ability to have a total of", this.maxOutletsPerCircuit * this.numCircuits, "and you currently have ", this.numOutlets, "outlets");
        }
        else {
            console.log("Circuits full!! Add another circuit prior to adding more outlets.");
        }
    };
    Basement.prototype.clean = function () {
        console.log("is this your way of asking me to clean your basement?");
    };
    Basement.prototype.reset = function () {
        this.numOutlets = basementDefaults.numOutlets;
        this.numCircuits = basementDefaults.numCircuits;
    };
    return Basement;
}());
exports.Basement = Basement;
