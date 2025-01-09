function setup() {
  createCanvas(400, 400);
  background(200);
  translate(200, 200)
  eyes(0,0)
}

function draw() {

}
function eyes (x, y){
  noStroke()
  //eyelid
  fill("rgba(173, 148, 57, 0.51)")
  ellipse(x+60, y, 51, 45)
  ellipse(x-60, y, 51, 45)
  //eyes
  stroke("black")
  fill("rgb(213, 213, 213)")
  ellipse(x+60, y, 50, 30);
  ellipse(x-60, y, 50, 30);
  fill("white")
  noStroke()
  ellipse(x+57, y-2, 44, 20);
  ellipse(x-63, y-2, 44, 20);
  //iris 
  for(let i=10; i>0; i-=1 ){
    let c = (color(random(0,255), random(0,255), random(0,255)))
    fill(c)
    ellipse(x+60, y, i*2, i*2)
  }

  for(let i=10; i>0; i-=1 ){
    let c = (color(random(0,255), random(0,255), random(0,255)))
    fill(c)
    ellipse(x-60, y, i*2, i*2)
  }


}