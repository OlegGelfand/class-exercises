
export class Bike {
    bike1Diameter:number;
    bike1Dist:number;
    bike2Diameter:number;
    bike2Dist:number;


    setBike1Properties(bike1Diameter:number) {
        this.bike1Diameter = bike1Diameter;
    }


    getDistanceTraveled(bike1Dist:number) {
        const bike1Distance = this.bike1Diameter * this.bike1Dist;
        console.log("Bike1 traveled", bike1Distance,"feet.");
    }



}