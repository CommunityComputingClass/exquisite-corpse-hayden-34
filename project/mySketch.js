function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(200);
  translate(200, 200);
  eyes(0,0)

}
let blink = 1;
let timer = 100;
function eyes (x, y){

  noStroke()
  //eyelid
  fill("rgba(147, 147, 147, 0.51)")
  ellipse(x+60, y, 51, 45)
  ellipse(x-60, y, 51, 45)
  //eyes
  stroke("black")
  fill("rgb(213, 213, 213)")
  ellipse(x+60, y, 50, 30*blink);
  ellipse(x-60, y, 50, 30*blink);
  
  fill("white")
  noStroke()
  ellipse(x+62, y-2, 44, 20*blink);
  ellipse(x-58, y-2, 44, 20*blink);
  fill('rgb(239, 123, 177)')
  ellipse(x-36, 0, 4, 8) 
  ellipse(x+36, 0, 4, 8)
  //iris 
  for(let i=5; i>=0; i-=1 ){
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  
    fill(colors[i])
    ellipse(x+60, y, i*2+15, (i*2+15)*blink);
    ellipse(x-60, y, i*2+15, (i*2+15)*blink);
  }
  fill('black');
  ellipse(x+60, y, 10, 10*blink);
  ellipse(x-60, y, 10, 10*blink);
  fill('white');
  ellipse(x+63, y-5, 5, 5*blink);
  ellipse(x-57, y-5, 5, 5*blink);
  fill('black')


  if(timer <= 0){
    blink = 0
  }

  if(timer <= -10){
    timer = random(150, 400)
    blink =1
  }
  else{
    timer -=1
  }
  text(timer, 50, 50)


}