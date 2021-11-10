


let rectfill;
let button1;
//let button2
let images = []
let image1
let image2
let image3
let image4
let image5

let download


var colors = ["blue", "lightGreen", "chocolate", "snow", "orangeRed", "yellow", "greenYellow", "mediumSlateBlue"]

const urlString = window.location.href;
const url = new URL(urlString);
let name = url.searchParams.get('hero');


function preload(){
  image1 = loadImage("./assets/hero-01.png")
  image2 = loadImage ("./assets/hero-02.png")
  image3 = loadImage("./assets/hero-03.png")
  image4 = loadImage ("./assets/hero-04.png") 
  image5 = loadImage ("./assets/hero-05.png")

  images=[image1, image2, image3, image4, image5]
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15)
  

  //STOP BUTTON
  button1 = createButton ("stop")
  button1.style ("font-size: 15px")
  button1.position(windowWidth-150,380)
  button1.style("color:deepPink")
  button1.style("background-color:orange")
  button1.style ("border-radius:10px")
  button1.size (70)

  button1.mousePressed (noLoop)  //stops the loop when button pressed




  //COLOR BUTTON - tried to do a changeColor button but couldn't make it work with noLoop function on
  // button2=createButton("color")
  // button2.position(windowWidth/2+205,300)
  // button2.style("color:snow")
  // button2.style("background-color:orange")
  // button2.style ("border-radius:10px")
  // button2.mouseClicked(changeColor)

}


// function changeColor() {
//   redraw()
//   rectfill = color (random(colors))

// }




function draw() {
  background("deepPink");
  rectfill = color(random(colors))

  //noLoop()

  //TITLE
  textAlign(CENTER)
  textSize(70)
  textFont("dongle")
  fill("orange")
  text("YOU'RE A EVERYDAY HERO", windowWidth/2, 70)

  text("COOL!", windowWidth/2, 730)

  noStroke()
  textSize(25)
  textAlign(LEFT)
  text("your superpower", windowWidth-180, 370)

  //CARD
  fill (rectfill)
  stroke("black")
  strokeWeight(2)
  rectMode(CENTER)
  rect (windowWidth/2, windowHeight/2, 300, 500, 20 )

  
  //NAME
  fill("orange")
  strokeWeight(0)
  textFont("dongle")
  textAlign(LEFT)
  textSize(35)
  text(name, windowWidth/2-100, 190)  //gives back what written in the input box as a text


  //BOXES
  noFill()
  stroke("orange")
  strokeWeight(1.5)
  rect(windowWidth/2, windowHeight/2-80, 220, 220)

  noFill()
  stroke("orange")
  strokeWeight(1.5)
  rect(windowWidth/2, windowHeight/2+120, 220, 100)


  //IMAGE
  imageMode(CENTER)
  let randoImg = random(images)
  image(randoImg, windowWidth/2, 400, 300,500) //randomly choose image from the images array
}
