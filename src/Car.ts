

export class Car {
    color:string;
    year:number;
    make:string;
    model:string;
    numSpares:number;
    numSeats:number;

    paint(color:string) {
       this.color = color;
    }

    addSpare() {
        this.numSpares++;
    }

    removeSpare() {
        this.numSpares--;
    }

    cleanSeats() {
        console.log('seats are clean');
    }

    addSeats(numSeats:number) {
        this.numSeats += numSeats;
    }

    removeSeats(numSeats:number) {
        this.numSeats -= numSeats;
    }
}