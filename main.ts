type Cell = {
  pawn: string | null;
  rook: string | null;
  knight: string | null;
  bishop: string | null;
  queen: string | null;
  king: string | null;
};

type Board = Cell[][];

type Piece = {
  name: string;
  color: string;
};

type Square = {
  piece?: Piece;
};

let board: Board = [];

function buildGame(): Board {
  board = [];
  for (let row = 0; row < 8; row++) {
    const boardRow: Cell[] = [];
    for (let col = 0; col < 8; col++) {
      if (row === 0) {
        const pieces: Piece[] = mainPieces();
        const piece = pieces[col];
        if (piece) {
          boardRow.push(createCell(piece));
        }
      } else if (row === 1) {
        boardRow.push(createCell({ name: "Pawn", color: "white" }));
      } else if (row === 2) {
        boardRow.push(emptyCells());
      } else if (row === 3) {
        boardRow.push(emptyCells());
      } else if (row === 4) {
        boardRow.push(emptyCells());
      } else if (row === 5) {
        boardRow.push(emptyCells());
      } else if (row === 6) {
        boardRow.push(createCell({ name: "Pawn", color: "black" }));
      } else if (row === 7) {
        const pieces: Piece[] = mainPieces();
        const piece = pieces[col];
        if (piece) {
          boardRow.push(createCell({ ...piece, color: "black" }));
        }
      }
    }
    board.push(boardRow);
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

function createCell(piece: Piece): Cell {
  return {
    pawn: piece.name === "Pawn" ? piece.color : null,
    rook: piece.name === "Rook" ? piece.color : null,
    knight: piece.name === "Knight" ? piece.color : null,
    bishop: piece.name === "Bishop" ? piece.color : null,
    queen: piece.name === "Queen" ? piece.color : null,
    king: piece.name === "King" ? piece.color : null,
  };
}

function emptyCells(): Cell {
  return {
    pawn: null,
    rook: null,
    knight: null,
    bishop: null,
    queen: null,
    king: null,
  };
}

function moveNotAvailable(board: Board, row: number, col: number) {
  if (row < 0 || row >= 8 || col < 0 || col >= 8) {
    return "Position not available,choose alternative";
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== null) {
      return "Sorry this space is taken, try again.";
    }
  }
}

moveNotAvailable(board, 3, 5);

function movePawn(board: Board, row: number, col: number) {
  if (row < 0 || row >= 8 || col < 0 || col >= 8) {
    return;
  }

  const currentCell = board[row]?.[col];
  const pawn = currentCell?.pawn;

  const direction = pawn === "white" ? -1 : 1;
  const startingRow = pawn === "white" ? 1 : 6;
  const newRow = row + direction;

  if (newRow < 0 || newRow >= 8) return;
}
