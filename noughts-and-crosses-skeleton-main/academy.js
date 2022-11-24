// Make your changes to store and update game state in this file
let board = [[null, null, null], [null, null, null], [null, null, null]]
let isNought = true

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    if (isNought && board[row][column] == null){
        counter += 1
        board[row][column] = "nought"
        isNought = false
    }
    else if (board[row][column] == null){
        counter += 1
        board[row][column] = "cross"
        isNought = true
    }
    console.log("takeTurn was called with row: "+row+", column:"+column);


}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
let counter = 0

function checkWinner() {
    console.log("checkWinner was called"); 
    for (let i=0; i<3;i++){
        for (let j=0; j<3; j++){
            if(board[i][j] != null){
                if ((i==0 && j==0)||(i==0 && j==2)||(i==2 && j == 0)||(i==2 && j == 2)) continue //Corners checked
                if ((j==0)||(j==2)){
                    //checking vertical direction in the middle as corners checked
                    if ((board[i-1][j] == board[i][j]) && (board[i+1][j]== board[i][j])) return board[i][j]

                }else if ((i==0)||(i==2)){
                //checking horizontal direction in the middle as corners checked
                    if ((board[i][j-1] == board[i][j]) && (board[i][j+1]== board[i][j])) return board[i][j]
                }else{
                    //checking horizontal direction not in the middle as corners checked
                    if ((board[i][j-1] == board[i][j]) && (board[i][j+1]== board[i][j])){ console.log("here") 
                        return board[i][j]
                    }else if ((board[i-1][j] == board[i][j]) && (board[i+1][j]== board[i][j])){
                        return board[i][j]
                    }else if((board[i+1][j-1] == board[i][j]) && (board[i-1][j+1]== board[i][j])){
                        return board[i][j]
                    }else if ((board[i-1][j-1] == board[i][j]) && (board[i+1][j+1]== board[i][j])){
                        return board[i][j]}
                }
            }
        }
    }
    if(counter >= 9){
        return "nobody"
    }
}

// Set the game state back to its original state to play another game.
function resetGame() {
    isNought = true
    counter = 0
    board = [[null, null, null], [null, null, null], [null, null, null]]
    console.log("resetGame was called");
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
