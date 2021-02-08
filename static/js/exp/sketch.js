let img;

var stars = [] 
var num = 800; 
var speed;

var lyrics =  ["Water us water us water us water us, pour a cup, the floor is cut, places in a",
"pot of luck, take your buck, you're outta stuff, do your knowledge but ,get your",
"dollars up, I grab my pen up with and exotic touch erotica, ",
"I love honey and oat milk with a lot of nuts, salad and garlic crush",
"My olives cut to please the palattes in my gut."]


function preload() { 
	img = loadImage('../static/img/felix-front.png', ()=>{
		console.log("success"); 
	},()=>{ 
		console.log("failure"); 
	}); 

}

function setup(){ 
	createCanvas(windowWidth, windowHeight); 
	for(var i = 0; i < num; i++){ 
		stars.push(new Star());  
	}
}


function draw(){
	background(0); 
	fill(255); 
	cursor("none");   
	let imageB = image(img, mouseX, mouseY,50,50);
	let speed = map(mouseX,0,width,0,20); // console.log(speed)
	translate(width/2,height/2); 

	for(var i = 0; i < stars.length; i++){
		stars[i].move(); 
		stars[i].edges(); 
		stars[i].display();

	} 
}

// console.log(stars)
