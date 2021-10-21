const basementDefaults = {
    numOutlets: 0,
    numCircuits: 0,
}

export class Basement {
    numOutlets:number = basementDefaults.numOutlets;
    numCircuits:number = basementDefaults.numCircuits;
    maxCircuits:number = 10;
    maxOutletsPerCircuit:number = 6;

    addCircuit() {
        if (this.numCircuits < this.maxCircuits) {
            this.numCircuits++;
        } else {
            console.log("you have maximized your circuits");
        }
    }

    addOutlet() {
        if (this.numOutlets < this.numCircuits * this.maxOutletsPerCircuit) {
            this.numOutlets++;
        } else {
            console.log("Circuits full!! Add another circuit prior to adding more outlets.");
        }
    }

    addOutlets(numOutlets:number) {
        const maxOutlets = this.maxOutletsPerCircuit * this.numCircuits;
        if (this.numOutlets + numOutlets <= maxOutlets) {
            this.numOutlets += numOutlets;
            console.log("you now have ", this.numOutlets, "installed");
        }
        else {
            console.log("you are requesting to install ", numOutlets, " outlets, you have an ability to have a total of", maxOutlets, "and you currently have ", this.numOutlets, "outlets" );
            console.log("Circuits full!! Add another circuit prior to adding more outlets.");
        }
    }

    clean() {
        console.log("is this your way of asking me to clean your basement?");
    }

    reset() {
        this.numOutlets = basementDefaults.numOutlets;
        this.numCircuits = basementDefaults.numCircuits;
    }

}