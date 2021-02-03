export class Canvas{
    constructor(canvas){
        this.canvas = canvas;
    }
    start(){
        this.ctx = this.canvas.getContext('2d');
    }
    drawTyped(object){
        if(object.type == "Square"){
            this.ctx.fillStyle = object.color;
            this.ctx.fillRect(object.place_x, object.place_y, object.width, object.height);
        }
        else{
            console.log("ERROR N_TYPED")
        }
    }
    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}