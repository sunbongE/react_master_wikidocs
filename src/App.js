import { useState } from "react"

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[b] === squares[a] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

function Square({value, onSquareClick}){

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares,setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }

    const nextSquares = squares.slice(); // 얕은 복사임, slice(시작인덱스, 개수? 끝나는인덱스+1) 인수없으면 전체복사.
    let OX = (xIsNext) ? "X" : "O";

    // if (nextSquares[i] != null) return;
    if (nextSquares[i]) return; // 값이 존재하면
    nextSquares[i] = OX;

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  
  }

    const winner = calculateWinner(squares);
    let status;
    const nextPlayer = (xIsNext) ? "X" : "O";
    status = (winner) ? "Winner: "+winner : "Next Player: "+nextPlayer;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=> handleClick(0)} />
        <Square value={squares[1]} onSquareClick={()=> handleClick(1)} />
        <Square value={squares[2]} onSquareClick={()=> handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=> handleClick(3)} />
        <Square value={squares[4]} onSquareClick={()=> handleClick(4)} />
        <Square value={squares[5]} onSquareClick={()=> handleClick(5)} />
      </div>
      
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=> handleClick(6)} />
        <Square value={squares[7]} onSquareClick={()=> handleClick(7)} />
        <Square value={squares[8]} onSquareClick={()=> handleClick(8)} />
      </div>
    </>
  );
}
