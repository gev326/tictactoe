var turn = 0;
var board_check = [];


function player_turn() {

  var boxes    = document.getElementsByClassName("board");
  // console.log(boxes);
  var boxcount = boxes.length;

  for (var i = 0; i <= boxcount-1; i += 1) {

    boxes[i].addEventListener('click', function() {
      if (this.innerHTML === ""){

        if (turn % 2 === 0){
          this.innerText += "X";
          board_check[this.id-1] = "X";
          // console.log(boxes[i]);
          turn++;

          check_winner("X");
          // console.log("text")

        } else {
          this.innerHTML += "O";
          board_check[this.id-1] = "O";
          turn--;

          check_winner("O");

          // console.log("text")
        }
      }
    });

  }

}

player_turn();

function resetboard(player_turn) {
  var boxes = document.getElementsByClassName("board");
  var boxcount = boxes.length;

  for (var i = 0; i <= boxcount - 1; i += 1) {
    box = boxes[i];
    box.innerHTML = "";
    turn;
  }
  // playerx = [];
  // playery =[];
};



function check_winner(player) {
  if (board_check[0] === "X" && board_check[1] === "X" && board_check[2] === "X" ||
      board_check[3] === "X" && board_check[4] === "X" && board_check[5] === "X" ||
      board_check[6] === "X" && board_check[7] === "X" && board_check[8] === "X" ||
      board_check[1] === "X" && board_check[4] === "X" && board_check[7] === "X" ||
      board_check[2] === "X" && board_check[5] === "X" && board_check[8] === "X" ||
      board_check[2] === "X" && board_check[4] === "X" && board_check[6] === "X" ||
      board_check[0] === "X" && board_check[4] === "X" && board_check[8] === "X" ||
      board_check[0] === "X" && board_check[3] === "X" && board_check[6] === "X") {

  	alert("X wins!");
  }

  if (board_check[0] === "O" && board_check[1] === "O" && board_check[2] === "O" ||
      board_check[3] === "O" && board_check[4] === "O" && board_check[5] === "O" ||
      board_check[6] === "O" && board_check[7] === "O" && board_check[8] === "O" ||
      board_check[1] === "O" && board_check[4] === "O" && board_check[7] === "O" ||
      board_check[2] === "O" && board_check[5] === "O" && board_check[8] === "O" ||
      board_check[2] === "O" && board_check[4] === "O" && board_check[6] === "O" ||
      board_check[0] === "O" && board_check[4] === "O" && board_check[8] === "O" ||
      board_check[0] === "O" && board_check[3] === "O" && board_check[6] === "O") {

    alert("O wins!");
  }
}



















