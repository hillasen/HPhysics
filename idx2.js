import {Square, Object, Canvas, Core} from './HPhysics/Core.js'

class Main extends Core{
    constructor(){
        super();
    }
    onStart(){
        console.log("Hello World!");
    }
}

var main = new Main();
main.start();

