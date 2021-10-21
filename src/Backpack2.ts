
export class Backpack2 {
    shirtWeight:number;
    /**
     * weight of a single shoe
     */
    shoeWeight:number;
    pantsWeight:number;

    getTotalWeight():number {
        const totalWeight = this.shirtWeight + (this.shoeWeight * 2) + this.pantsWeight;
        console.log("total backpack weight is ",totalWeight, "lbs");
        return totalWeight;
    }

    setShoeWeight(weight:number) {
        this.shoeWeight = weight;
    }

    setPantsWeight(weight:number) {
        this.shoeWeight = weight;
    }

    setShirtWeight(weight:number) {
        this.shoeWeight = weight;
    }
}