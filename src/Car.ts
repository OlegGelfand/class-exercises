

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

    addSpare(numSpares:number) {
        this.numSpares++;
    }

    removeSpare(numSpares:number) {
        this.numSpares--
    }

    cleanSeats(numSeats:number) {
        console.log('seats are clean');
    }

    addSeats(numSeats:number) {
        this.numSeats += numSeats;
    }

    removeSeats(numSeats:number) {
        this.numSeats -= numSeats;
    }
}