import {Object} from './Object.js';

export class Square extends Object{
    constructor(id, width, height, place_x, place_y){
        super("Square", id);
        this.width = width;
        this.height = height;
        this.color = 'green';
        this.place_x = place_x;
        this.place_y = place_y;
    }
    setColor(color){
        this.color = color;
    }

    
}