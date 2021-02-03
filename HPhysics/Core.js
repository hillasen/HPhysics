export {Object} from './Objects/Object.js';
export {Square} from './Objects/Square.js';
export {Canvas} from './Draw/Canvas.js';

export class Core {
    constructor(){
        this.time = 0;
        this.scenetime = 10;
    }
    start(){
        if(typeof(this.onStart) == 'function'){
            this.onStart();
        }
    }
    runScene(){
        if(typeof(this.beforeScene) == 'function'){
            this.beforeScene();
        }
        setTimeout(function(){
            if(typeof(this.onScene) == 'function'){
                this.onScene();
            }
        }, this.scenetime)
    }
}