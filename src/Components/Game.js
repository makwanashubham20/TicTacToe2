import React,{useState, useMemo, useEffect} from 'react';
import Board from "./Board";
import ListofSteps from "./ListofSteps";

var history = Array(9).fill(null);
if(localStorage.getItem("history")!==null){
  console.log("entered");
  history = JSON.parse(localStorage.getItem("history"));
}
else{
  history.push(["", "", "", "", "", "", "", "", ""]);
  history.push(["", "", "", "", "", "", "", "", ""]);
  history.push(["", "", "", "", "", "", "", "", ""]);
  history.push(["", "", "", "", "", "", "", "", ""]);
  history.push(["", "", "", "", "", "", "", "", ""]);
  history.push(["", "", "", "", "", "", "", "", ""]);
  history.push(["", "", "", "", "", "", "", "", ""]);
  history.push(["", "", "", "", "", "", "", "", ""]);
  history.push(["", "", "", "", "", "", "", "", ""]);
  history.push(["", "", "", "", "", "", "", "", ""]);
}

var lastboard = Array(9).fill(null);
lastboard = ["", "", "", "", "", "", "", "", ""];
if(localStorage.getItem("boardValue")!==null){
  lastboard = JSON.parse(localStorage.getItem("boardValue"));
}

function Game(props){

    const [stepid, setStep] = useState(0 || Number(localStorage.getItem("stepid")));
    const [stepCount, setCount] = useState(0 || Number(localStorage.getItem("stepCount")));
    const [boardValue, setBoard] = useState(lastboard);
  
    const WinnerChecker = useMemo(() => {
        const validPairs = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
      
        for (let i = 0; i < validPairs.length; i++) {
          if (
            boardValue[validPairs[i][0]] &&
            boardValue[validPairs[i][0]] == boardValue[validPairs[i][1]] &&
            boardValue[validPairs[i][1]] == boardValue[validPairs[i][2]]
          ) {
            return boardValue[validPairs[i][0]];
          }
        }
        return "";
      }, [boardValue]);


    function changeValue(index){
        if(WinnerChecker===""){
            var tmp= boardValue.slice(0, 9);
            tmp[index] = stepid%2 ? "O":"X";
            history[stepid+1] = tmp;  
            setBoard(tmp);
            setCount(stepid+1);
            setStep(stepid+1);
        }
    }

    function changeBoard(step){
      var x;
      if(step===0){
        x=["", "", "", "", "", "", "", "", ""];
      }
      else{
      x = history[step].slice(0, 9);
      }
      setBoard(x);
      setStep(step);
      }

      function resetGame(){
        setStep(0);
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        history = [["", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", ""],["", "", "", "", "", "", "", "", ""]];
      }

    useEffect(()=>{
      localStorage.setItem("history", JSON.stringify(history));
      localStorage.setItem("stepid", stepid);
      localStorage.setItem("stepCount", stepCount);
      localStorage.setItem("boardValue", JSON.stringify(boardValue));
    }
    ,[stepid]);

    return (
        <>
        <Board changeValue={changeValue} board={boardValue} resetGame={resetGame}/>
        <ListofSteps isWinner={WinnerChecker} stepid={stepid} next={stepid%2? "O": "X"} stepCount={stepCount} changeBoard={changeBoard}/>
        </>
      );
}

export default Game;