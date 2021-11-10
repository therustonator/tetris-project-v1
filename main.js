const gridHeight = 20
const gridWidth = 10
const square = 20
var currentPiecePosition =  [2,3]
var Jblock = [JblockRotation1,JblockRotation2, JblockRotation3, JblockRotation4]
var L_block = [L_blockRotation1,L_blockRotation2,L_blockRotation3,L_blockRotation4]
var Lineblock = [LineblockRotation1,LineblockRotation2]
var Oblock = [OblockRotation1]
var Sblock = [SblockRotation1,SblockRotation2]
var Tblock = [TblockRotation1,TblockRotation2,TblockRotation3,TblockRotation4]
var Pieces = [Jblock,L_block,Lineblock,Oblock,Sblock,Tblock]
var RotationIndex = 0
var currentPieceIndex = 4
var currentPiece = Pieces[currentPieceIndex][RotationIndex]
var speed = 25


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
  let c=createCanvas(400,400)
  c.parent("stickGameHere")
  clearGrid()
}
function draw(){
 
  for(y=0; y<gridHeight; y++){
    for(x=0; x<gridWidth; x++){
        fill(colours[grid[y][x]])
      rect(x*square+100, y*square, square, square)
    }
    
  } 
  drawpieces(currentPiecePosition[0],currentPiecePosition[1],currentPiece,currentPieceIndex)
  if(frameCount % speed == 0){
    if(currentPiecePosition[1]+Pieces[currentPieceIndex].length-2<gridHeight-1){
      currentPiecePosition[1]++
    }
  } 
}

function drawpieces(posx,posy,block,blockColour){
  for(let y=0; y<block.length; y++){
    for(let x=0; x<block[y].length; x++){
      if(block[y][x] == 1){
         fill(colours[blockColour])
      rect((x+posx)*square+100, (y+posy)*square, square, square)
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
  else if(keyCode === UP_ARROW) {
    RotationIndex++
    
      if(RotationIndex > Pieces[currentPieceIndex].length-1){
      RotationIndex = 0
    }
    currentPiece = Pieces[currentPieceIndex][RotationIndex]
  }
  else if(keyCode === 32) {
    currentPieceIndex++
      if(currentPieceIndex>Pieces.length-1)
        currentPieceIndex = 0
    currentPiece = Pieces[currentPieceIndex][RotationIndex]
  }
  else if(keyCode === 83)
    speed = floor(speed / 2)
}

// function collider() {
//   if()
// }

// function pieceSelector() {
  
// }


