$(document).ready(function () {
    var board = [
        [0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0]
    ];

    function printBoard() {

        var boardHtml = `<div class="container">`;
        for (var i = 0; i < 6; i++) {
            boardHtml += `<div class="row" id="row${i}">`;
            for (var j = 0; j < 7; j++) {
                boardHtml += `<div class="col-1 case" id="column${j}">${board[i][j]}</div>`;
            }
            boardHtml += `</div>`;
        }
        boardHtml += `</div>`;
        $('#board').html(boardHtml)
    }

    printBoard();
})