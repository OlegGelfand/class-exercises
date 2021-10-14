"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Business = void 0;
var Business = /** @class */ (function () {
    function Business(name, sector) {
        this.name = name;
        this.sector = sector;
        // this.name = pname;
        // this.sector = psector;
        this.profitMargin = [
            30, 8, 15, 35, 18, 60, 24, 420, 90, 13, 85
        ];
    }
    Business.prototype.getAvgRevenue = function (numYears) {
    };
    Business.prototype.getProfit = function (yearsBack) {
    };
    Business.prototype.getAvgProfit = function (numYears) {
    };
    return Business;
}());
exports.Business = Business;
