let theta = 0;

function setup() {
  createCanvas(500, 500);
  stroke(0);
  background(0, 64, 128);
rect(25, 25, 50, 50);
}
  
function draw() {
   
  
  if (keyCode == UP_ARROW) {
    background(230);
    fill(0);
    rect(220, 0, 30, 50);
    rect(450, 240, 50, 30);
    rect(240, 450, 30, 50);
    rect(0, 230, 50, 30);

    y = 80;
    x= 230;
    fill(204, 0, 0);
    rect(x, y, 20, 180);
    fill(153, 0, 0);
    textSize(35);
    text('Becoming', 310, 140);
    textSize(25);
    fill(204, 0, 0);
    text('Knowledge', mouseX, mouseY, 50, 50);
    line(mouseX*2, mouseY/5, 240, 260);

  }
 
  else if (keyCode == RIGHT_ARROW) {
    background(179);
    fill(0);
    rect(220, 0, 30, 50);
    rect(450, 240, 50, 30);
    rect(240, 450, 30, 50);
    rect(0, 230, 50, 30);

    
    y = 250;
    x = 240;
    fill(204, 0, 0);
    rect(x, y, 180, 20);
    fill(153, 0, 0);
    textSize(35);
    text('Being', 350, 430);
    textSize(25);
    fill(204, 0, 0);
    text('Knowledge', mouseX, mouseY, 50, 50);
    fill(204, 0, 0);
    line(mouseX*4, mouseY*3, 240, 270);
  }
  
  else if (keyCode == DOWN_ARROW) {
 background(random(355), random(350), random(350));
    fill(0);
    rect(220, 0, 30, 50);
    rect(450, 240, 50, 30);
    rect(240, 450, 30, 50);
    rect(0, 230, 50, 30);

    
    y = 250;
    x = 200;
    textSize(35);
    fill(153, 0, 0);
    text('Being', 40, 80);
    text('and', 60, 260);
    text('Becoming', 30, 470);

    fill(230, 242, 255);
translate(width / 2, height / 2);
  rotate(radians(theta));
    fill(204, 0, 0);
  rect(-2, -70, 20, 230);
  // increment the angle by one degree
  theta += 6;
    
    rotate(radians(theta));
    line(-2, -70, 20, 230);
    theta += 5;
  frameRate(1);
    textSize(25);
    fill(204, 0, 0);
    text('Knowledge', 20, 160);  
  }
  
  else {
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y
  background(102);
  fill(255, 150);
  ellipse(x, height/2, y, y);
    fill(153, 0, 0);
    textSize(32);
    text('Being', x, height/2, y, y);
    
  fill(0, 159);
  ellipse(ix, height/2, iy, iy);
    fill(204, 0, 0);
    textSize(32);
    text('Becoming', ix, height/2,iy, iy);
    
    
    textSize(30);
    text('🕕', 81, 72)
    textSize(20);
    text('🔼', 86, 40)
    text('◀️', 45, 70)
    text('▶️', 125, 70)
    text('🔽', 86, 100)
    
    fill(168, 30, 30);
    rect(0, 360, 500, 5);
    
    rect(5, 350, 7, 30);
    rect(220, 350, 5, 30);
    rect(490, 350, 7, 30);
   
       
    
  }
  

}



