
export class Computer {
    speed:number;
    cpu:string;

    turnOn(speed:number) {
        const startUpTime = 80 - Math.floor(this.speed * .8) + 20;
        console.log("this computer started up at", startUpTime, "seconds");
    }

    runSpeedTest(speed:number) {
        const startUpTimeSpeedTest = 270 - Math.floor((this.speed - 1) * 100/99 * 2.7) + 30;
        console.log("test results show that this",this.cpu, "processor", startUpTimeSpeedTest, "seconds");
    }
    upGradeSpeed(speedIncrease:number) {
        this.speed = speedIncrease + 20;
        console.log("the computer speed is now",this.speed)

    }
}
