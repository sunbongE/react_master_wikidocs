import { useState } from "react"

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
    console.log('squares : ',squares)
    const nextSquares = squares.slice(); // 얕은 복사임, slice(시작인덱스, 개수? 끝나는인덱스+1) 인수없으면 전체복사.
    console.log('nextSquares : ',nextSquares)
    let OX = (xIsNext) ? "X" : "O";
    nextSquares[i] = OX;
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
    console.log(squares)
  }


  return (
    <>
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
