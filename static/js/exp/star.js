function Star(){
this.x = random(-width,width);
this.y = random(-height,height);
this.z = random(0,1000);
this.sx = map(this.x/this.z,0,1,0,width);
this.sy = map(this.y/this.z,0,1,0,height);
this.r = map(this.z,0,width,15,0);
// console.log(width)
 
this.move = function(){
this.z -= 0;
if(this.z < 1){
this.z = random(-10,1000);
}else{
	// console.log(this.z)
}

}

this.edges = function(){


}
  
this.display = function(){

strokeWeight(1);
// line(this.sx,this.sy,this.x,this.y);
ellipse(this.sx,this.sy,this.r);
}
}