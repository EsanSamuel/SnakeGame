//Snake game project build by @Esan Samuel
//declaring variables
var blocksize = 25
var rows = 20
var cols = 20
var board
var context

var snakeX = blocksize * 5
var snakeY = blocksize * 5

var velocityX = 0
var velocityY = 0

var foodX
var foodY


//calling functions
window.onload = function(){
    board = document.getElementById("board")
    board.width = cols * blocksize
    board.height = rows * blocksize
    context = board.getContext("2d")


    
    document.addEventListener("keyup", changeDirection)
    setInterval(update,1000/10)
    placefood()
}

function update(){
    //color and shape of the background
    context.fillStyle = "green"
    context.fillRect(0,0,board.width,board.height)

    //color and shape of the food
    context.fillStyle = "red"
    context.fillRect(foodX,foodY,blocksize,blocksize)
    if (snakeX == foodX && snakeY == foodY){
        placefood()
    }

    //color and shape of the snake
    context.fillStyle = "blue"
    snakeX += velocityX * blocksize
    snakeY += velocityY * blocksize
    context.fillRect(snakeX,snakeY,blocksize,blocksize)
}

//change direction when direction key is pressed
function changeDirection(e){
    if(e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0           
        velocityY = -1
    }

    else if(e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0
        velocityY = 1       
    }

    else if(e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1
        velocityY = 0
    }

    else if(e.code == "ArrowRight" && velocityX != -1){
        velocityX = 1
        velocityY = 0
    }
}

//food randomly moving
function placefood(){
    foodX = Math.floor(Math.random()*cols) * blocksize
    foodY = Math.floor(Math.random()*rows) * blocksize
}
