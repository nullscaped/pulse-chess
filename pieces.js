function piece(type, color, symbol) {
    return {
        type: type,
        color: color,
        symbol: symbol
    };
}

export const board = [
    [piece("rook", "black", "♜"), piece("knight", "black", "♞"), piece("bishop", "black", "♝"), piece("queen", "black", "♛"), piece("king", "black", "♚"), piece("bishop", "black", "♝"), piece("knight", "black", "♞"), piece("rook", "black", "♜")],
    [piece("pawn", "black", "♟"), piece("pawn", "black", "♟"), piece("pawn", "black", "♟"), piece("pawn", "black", "♟"), piece("pawn", "black", "♟"), piece("pawn", "black", "♟"), piece("pawn", "black", "♟"), piece("pawn", "black", "♟")],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [piece("pawn", "white", "♙"), piece("pawn", "white", "♙"), piece("pawn", "white", "♙"), piece("pawn", "white", "♙"), piece("pawn", "white", "♙"), piece("pawn", "white", "♙"), piece("pawn", "white", "♙"), piece("pawn", "white", "♙")],
    [piece("rook", "white", "♖"), piece("knight", "white", "♘"), piece("bishop", "white", "♗"), piece("queen", "white", "♕"), piece("king", "white", "♔"), piece("bishop", "white", "♗"), piece("knight", "white", "♘"), piece("rook", "white", "♖")]
];
