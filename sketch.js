class Node {
  constructor(x, y){
    this.position = createVector(x,y);
    fill(255);
    noStroke();
    circle(this.position.x, this.position.y, 5);
  }

  OnHoverEnter(){
    fill(255, 204, 0);
    noStroke();
    circle(this.position.x, this.position.y, 5);
  }

  OnHoverExit(){
    fill(255);
    noStroke();
    console.log("hit");
    circle(this.position.x, this.position.y, 5);
  }
}

class Knot {
  constructor(nodes){
    this.nodes = nodes;
    this.hoveredNode = null;
  }

  CheckForHoverNode(mousePos){
    var closest_dist = 20;
    var closest_indx = null;
    for (let i = 0; i< this.nodes.length; i++){
      if (mousePos.dist(this.nodes[i].position) < closest_dist){
        closest_dist = mousePos.dist(this.nodes[i].position);
        closest_indx = i;
      }
    }
    if (closest_indx != this.hoveredNode){
      if(closest_indx != null){this.nodes[closest_indx].OnHoverEnter();}

      if(this.hoveredNode != null){this.nodes[this.hoveredNode].OnHoverExit();}

      this.hoveredNode = closest_indx;
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
  console.log(knot.nodes);
  append(knot.nodes, new Node(mouseX, mouseY));
}

function mouseReleased() {
  append(knot.nodes, new Node(mouseX, mouseY));
}
