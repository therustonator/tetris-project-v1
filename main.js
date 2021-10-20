const gridHeight = 20
const gridWidth = 10
const square = 20
var currentPiecePosition =  [2,3]
var Jblock = [JblockRotation1,JblockRotation2, JblockRotation3, JblockRotation4]
var currentPiece = Jblock[3]


let colours = ["grey","red","green","yellow","orange","blue"]
let grid 
function clearGrid(){
  grid = []
  for(let a = 0; a<gridHeight; a++){
  let zeros =(new Array(gridWidth)).fill(0)
    grid.push(zeros)
  }
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  
}
function draw(){
  clearGrid()
  drawpieces(currentPiecePosition[0],currentPiecePosition[1],currentPiece,2)
  for(y=0; y<gridHeight; y++){
    for(x=0; x<gridWidth; x++){
        fill(colours[grid[y][x]])
      rect(x*square, y*square, square, square)
    }
    
  }
  if(frameCount % 20 == 0){
    if(currentPiecePosition[1]+Jblock.length-2<gridHeight-1){
      currentPiecePosition[1]++
    }
  } 
}

function drawpieces(posx,posy,block,blockColour){
  for(let y=0; y<block.length; y++){
    for(let x=0; x<block[y].length; x++){
      if(block[y][x] == 1){
        grid[y+posy][x+posx] = blockColour
      }
    }
  }
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if(currentPiecePosition[0]>0){
      currentPiecePosition[0]--
    }
  } else if (keyCode === RIGHT_ARROW) {
    if(currentPiecePosition[0]+currentPiece[0].length<gridWidth){
      
      currentPiecePosition[0]++
    }
  }
    else if (keyCode === DOWN_ARROW) {
       if(currentPiecePosition[1]+1<gridHeight-1){
      currentPiecePosition[1]++
       }
    }    
  else if(currentPiecePosition[0]>20) {
    
  }
}
