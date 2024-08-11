function setup() {
    createCanvas(400, 400);
    background("black")
  }
  
  function draw() {
    stroke("grey");
    fill("white");
    
    
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 20, 35);
    }
  }
  