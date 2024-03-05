import { useState } from "react";
import BoxButton from "./BoxButton";
import resultCalculate from "../utils/resultCalculate";

export default function TicTacToe() {
    const [boxValues, setboxValues] = useState([Array(9).fill(null)]);
    const [xOrY, setxOrY] = useState(true);

    let historyBox = boxValues[boxValues.length - 1];
    let result = resultCalculate(historyBox);

    function handleBoxClick(i) {
        if (historyBox[i] || result) return;
        const newboxValues = historyBox.slice();
        newboxValues[i] = xOrY ? "X" : "O";
        setboxValues([...historyBox, newboxValues]);
        setxOrY(!xOrY);
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen text-8xl">
            <h2 className="text-4xl font-mono font-bold p-4 text-violet-950">
                {result
                    ? `${result} is the winner!`
                    : `${xOrY ? "X" : "O"} - player turn.`}
            </h2>
            <div className="flex">
                <BoxButton
                    boxValue={historyBox[0]}
                    onBoxClick={() => handleBoxClick(0)}
                />
                <BoxButton
                    boxValue={historyBox[1]}
                    onBoxClick={() => handleBoxClick(1)}
                />
                <BoxButton
                    boxValue={historyBox[2]}
                    onBoxClick={() => handleBoxClick(2)}
                />
            </div>
            <div className="flex">
                <BoxButton
                    boxValue={historyBox[3]}
                    onBoxClick={() => handleBoxClick(3)}
                />
                <BoxButton
                    boxValue={historyBox[4]}
                    onBoxClick={() => handleBoxClick(4)}
                />
                <BoxButton
                    boxValue={historyBox[5]}
                    onBoxClick={() => handleBoxClick(5)}
                />
            </div>
            <div className="flex">
                <BoxButton
                    boxValue={historyBox[6]}
                    onBoxClick={() => handleBoxClick(6)}
                />
                <BoxButton
                    boxValue={historyBox[7]}
                    onBoxClick={() => handleBoxClick(7)}
                />
                <BoxButton
                    boxValue={historyBox[8]}
                    onBoxClick={() => handleBoxClick(8)}
                />
            </div>
        </div>
    );
}