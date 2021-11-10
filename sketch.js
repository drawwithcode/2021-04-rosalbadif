var input
var button
let name
let PImage

const urlString = window.location.href;
const url = new URL(urlString);
console.log (url)

function setup() {
    createCanvas(windowWidth, windowHeight)
  input= createInput("").attribute("placeholder", "insert your hero name")
  input.position(windowWidth/2-75, 460)
  input.style("background-color:orange")
  input.style("color:deepPink")


  button = createButton ("find out")
  button.style("background-color:orange")
  button.style("color:deepPink")
  button.position(windowWidth/2-20, 600 )
  button.style ("border-radius:10px")
  
  button.mouseClicked(go)
}

function draw (){
  background("deepPink")

  noStroke()
  textAlign(CENTER)
  textSize(100)
  fill("orange")
  textFont ("dongle")
  text ("hello hero", windowWidth/2, 100)

  textSize(30)
  text("let's find out your superpowers", windowWidth/2, 400)

  textSize(50)
  text(input.value(), windowWidth/2, 430 )

  hero=input.value()

//   stroke("orange")
//   strokeWeight(3)
//   line(windowWidth/2-100, 440, windowWidth/2+100, 440)
}


function go(){

    window.open(url + "second-page.html?hero=" + hero, "_self")
}
