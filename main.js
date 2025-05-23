var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var board = [];
function buildGame() {
    board = [];
    for (var row = 0; row < 8; row++) {
        var boardRow = [];
        for (var col = 0; col < 8; col++) {
            if (row === 0) {
                var pieces = mainPieces();
                var piece = pieces[col];
                if (piece) {
                    boardRow.push(createCell(piece));
                }
            }
            else if (row === 1) {
                boardRow.push(createCell({ name: "Pawn", color: "white" }));
            }
            else if (row === 2) {
                boardRow.push(emptyCells());
            }
            else if (row === 3) {
                boardRow.push(emptyCells());
            }
            else if (row === 4) {
                boardRow.push(emptyCells());
            }
            else if (row === 5) {
                boardRow.push(emptyCells());
            }
            else if (row === 6) {
                boardRow.push(createCell({ name: "Pawn", color: "black" }));
            }
            else if (row === 7) {
                var pieces = mainPieces();
                var piece = pieces[col];
                if (piece) {
                    boardRow.push(createCell(__assign(__assign({}, piece), { color: "black" })));
                }
            }
        }
        board.push(boardRow);
        console.log("boards", board);
    }
    return board;
}
buildGame();
function mainPieces() {
    return [
        {
            name: "Rook",
            color: "white",
        },
        {
            name: "Knight",
            color: "white",
        },
        {
            name: "Bishop",
            color: "white",
        },
        {
            name: "Queen",
            color: "white",
        },
        {
            name: "King",
            color: "white",
        },
        {
            name: "Bishop",
            color: "white",
        },
        {
            name: "Knight",
            color: "white",
        },
        {
            name: "Rook",
            color: "white",
        },
    ];
}
function createCell(piece) {
    return {
        pawn: piece.name === "Pawn" ? piece.color : null,
        rook: piece.name === "Rook" ? piece.color : null,
        knight: piece.name === "Knight" ? piece.color : null,
        bishop: piece.name === "Bishop" ? piece.color : null,
        queen: piece.name === "Queen" ? piece.color : null,
        king: piece.name === "King" ? piece.color : null,
    };
}
function emptyCells() {
    return {
        pawn: null,
        rook: null,
        knight: null,
        bishop: null,
        queen: null,
        king: null,
    };
}
function moveNotAvailable(board, row, col) {
    if (row < 0 || row >= 8 || col < 0 || col >= 8) {
        return "Position not available,choose alternative";
    }
    for (var i = 0; i < board.length; i++) {
        if (board[i] !== null) {
            return "Sorry this space is taken, try again.";
        }
    }
}
moveNotAvailable(board, 3, 5);
function movePawn(board, row, col) {
    var _a;
    if (row < 0 || row >= 8 || col < 0 || col >= 8) {
        return;
    }
    var currentCell = (_a = board[row]) === null || _a === void 0 ? void 0 : _a[col];
    var pawn = currentCell === null || currentCell === void 0 ? void 0 : currentCell.pawn;
    var direction = pawn === "white" ? -1 : 1;
    var startingRow = pawn === "white" ? 1 : 6;
    var newRow = row + direction;
    if (newRow < 0 || newRow >= 8)
        return;
}
