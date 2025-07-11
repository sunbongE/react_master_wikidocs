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

function Board({xIsNext, squares, onPlay}) {
  function handleClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    
    const nextSquares = squares.slice();
    let OX = (xIsNext) ? "X" : "O";

    // if (nextSquares[i] != null) return;
    if (nextSquares[i]) return; // 값이 존재하면
    nextSquares[i] = OX;
    
    onPlay(nextSquares);
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

export default function Game(){
  // const [xIsNext, setXIsNext] = useState(true);
  const [history,setHistory] = useState([Array(9).fill(null)]);
  const [currentVersion, setCurrentVersion] = useState(0); // 사용자가 보고있는 버전 관리.
  
  const currentSquares = history[currentVersion];
  const xIsNext = currentVersion%2 === 0;

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0,currentVersion+1), nextSquares];
    setHistory(nextHistory); 
    setCurrentVersion(nextHistory.length-1);
    // setXIsNext(!xIsNext);
    
  }

  function jumpTo(nextVersion){
    setCurrentVersion(nextVersion);
    // setXIsNext(nextVersion%2===0);
  }

  const versiones = history.map((squares, version) => {
    let description;

    if(version>0){
      description = '이동 #'+version+'로 가기';
    }else{
      description = '게임 시작으로 가기';
    }
    return (
      <li key={version}>
        <button onClick={()=> jumpTo(version)}>{description}</button>
      </li>
    );

  })

  console.log(history)

  return(
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{versiones} </ol>
      </div>
    </div>
  );
}