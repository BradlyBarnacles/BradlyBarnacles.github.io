class Node {
  constructor(x, y){
    this.position = createVector(x,y);
    stroke(255);
    circle(this.position.x, this.position.y, 5);
  }

  OnHoverEnter(){
    stroke(255, 204, 0);
    console.log("highlight")
    circle(this.position.x, this.position.y, 5);
  }

  OnHoverExit(){
    stroke(255);
    circle(this.position.x, this.position.y, 5);
  }
}

class Knot {
  constructor(nodes){
    this.nodes = nodes;
    this.hoveredNode = null;
  }

  CheckForHoverNode(mousePos){
    if (this.hoveredNode != null) {
      if (mousePos.dist(this.nodes[this.hoveredNode].position) >= 20){
        this.nodes[this.hoveredNode].OnHoverExit;
      }
    }
  
    for (let i = 0; i< this.nodes.length; i++){
      if (mousePos.dist(this.nodes[i].position) < 20){
        if (this.hoveredNode != i){
          this.nodes[i].OnHoverEnter();
          console.log(i);
          this.hoveredNode = i;
        }
      }
      else{
        if (this.hoveredNode == i){
          this.nodes[i].OnHoverExit();
        }
      }
    }

  }
}

let knot = new Knot([]);

function setup() {
  createCanvas(710, 400);
  background(102);
}

function draw() {
  let mousePos = createVector(mouseX, mouseY);
  knot.CheckForHoverNode(mousePos);
  


  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mousePressed() {
  append(knot.nodes, new Node(mouseX, mouseY));
}

function mouseReleased() {
  append(knot.nodes, new Node(mouseX, mouseY));
}
