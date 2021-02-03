import {Square, Object, Canvas} from './HPhysics/Core.js'


var obj1 = new Square(1, 100, 100, 10, 10);
var obj2 = new Square(1, 100, 100, 200, 10);
obj2.setColor('brown');

const cvs = new Canvas(document.getElementById('cvs'));
cvs.start();
cvs.drawTyped(obj1);
//cvs.drawTyped(obj2);

scene();
var time = 0;
var speed = 0; // speed px/s
var ac = 0.5;
var speed_text = document.getElementById('speed');
function scene(){
setTimeout(function(){
    if(time < 1000){
    speed_text.innerHTML = speed  + " px/s";
    
    time+=10;
    speed = ac * time
    }
    cvs.clearCanvas();
    obj1.place_x = obj1.place_x + (speed/ 100);

    cvs.drawTyped(obj1);
    scene();
 }, 10);
}



