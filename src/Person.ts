

export class Person {
    weight:number;
    gender:string;
    name:string;

    feed(food:string) {
        console.log(this.name, 'had', food, 'on Shabbos');
    }

    feedUntilFull(food:string) {

        switch (this.gender) {
            case "f":
                this.weight +=3;
                break;
            case "m":
                this.weight +=1;
                break;
            default:
                console.log('please identify your gender');
        }
    }

    checkScale() {
        console.log(this.name, 'weighs', this.weight, 'grams');
    }
}