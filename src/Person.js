"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.feed = function (food) {
        console.log(this.name, 'had', food, 'on Shabbos');
    };
    Person.prototype.feedUntilFull = function (food) {
        switch (this.gender) {
            case "f":
                this.weight += 3;
                break;
            case "m":
                this.weight += 1;
                break;
            default:
                console.log('please identify your gender');
        }
    };
    Person.prototype.checkScale = function () {
        console.log(this.name, 'weighs', this.weight, 'grams');
    };
    return Person;
}());
exports.Person = Person;
