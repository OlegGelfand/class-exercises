
export class Backpack {

    shoeWeight:number;
    pantsWeight:number;
    shirtWeight:number;

    getTotalWeight():number {
        // const totalWeight = this.shoeWeight + this.shirtWeight + this.pantsWeight
        return  (2  * this.shoeWeight) + this.shirtWeight + this.pantsWeight;
    }

    setShoeWeight(weight:number) {
        this.shoeWeight = weight;
    }

    setShirtWeight(weight:number) {
        this.shirtWeight = weight;
    }

    setPantsWeight(weight:number) {
        this.pantsWeight = weight;
    }

}