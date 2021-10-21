
export class Bike {
    /**
     *
     * @param bikeDiameter measured in inches
     */
    constructor(public bikeDiameter:number) {
    }

    setBikeProperties(bikeDiameter:number):void {
        this.bikeDiameter = bikeDiameter;
    }

    /**
     * Returns distance in feet.
     * @param numRotations
     */
    getDistanceTraveled(numRotations:number):number {
       return Math.round(this.bikeDiameter * Math.PI * numRotations / 12);
    }





}