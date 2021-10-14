import {Sectors} from "./Sectors.enum";


export class Business {
    // name:string;
    // sector:Sectors;
    profitMargin:Array<number>;
    annualRevenue:Array<number>;

    constructor(public name:string, public sector:Sectors) {

        // this.name = pname;
        // this.sector = psector;
        this.profitMargin = [
            30,8,15,35,18,60,24,420,90,13,85
        ]
    }

    getAvgRevenue(numYears:number):number {

    }

    getProfit(yearsBack:number):number {

    }

    getAvgProfit(numYears:number):number {

    }

}
