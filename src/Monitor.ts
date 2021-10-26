import {Options} from "./Options.enum";

export class Monitor {
    /**
     * width and height measured in pixels
     */
    height:number;
    width:number;
    private pixelWidth:number;
    private pixelHeight:number;

    constructor(public option?:Array<Options>) {
        console.log('feel free to include brand name or model number here');
    }

    getTotalPixels() {
        const totalPixels = this.pixelHeight * this.pixelWidth;
        console.log('totalPixels', totalPixels );
     }

    setPixelWidth(pixelWidth:number) {
        this.pixelWidth = pixelWidth;
    }
    setPixelHeight(pixelHeight:number) {
        this.pixelHeight = pixelHeight;
    }
    setWidth(width:number) {
        this.width = width;
    }
    setHeight(height:number) {
        this.height = height;
    }
    getScreenSize() {
        const screenSize = Math.round(Math.sqrt(this.width * this.width + this.height * this.height) * 100) / 100;
        console.log('based on your monitors height and width, your screen size is approximately',screenSize, "inches");
    }
    getAspectRatio() {
        const aspectRatio = Math.round((this.pixelHeight / this.pixelWidth)*100)/100;
        console.log('your aspect ratio is',aspectRatio, "pixels");
    }

}