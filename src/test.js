let direction = Math.floor(Math.random()*360);
console.log(direction);
let offSetX;
let offSetY;
setOffsets();
function setOffsets(){
    if(direction > 270 && direction < 360){
        offSetX = direction / 360;
        offSetY = direction / 270;
    }
    else if(direction < 90 && direction > 0){ 
        offSetX = direction / 360;
        offSetY = direction / 90 * -1;
    }
    else if(direction > 90 && direction < 180){
        offSetX = direction / 180 *-1;
        offSetY = direction/90* -1;
    }
    else{
        offSetX = direction / 180 ;
        offSetY = direction / 270 *-1;
    }
    console.log(offSetX,offSetY)   
}