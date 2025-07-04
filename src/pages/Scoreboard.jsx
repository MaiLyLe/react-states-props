import { useState } from 'react';

function Scoreboard() {
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);

    const totalScore = player1Score + player2Score;

    return (
        <div className="text-center">
            <p className="mb-4">Player 1: {player1Score}</p>
            <button
                onClick={() => setPlayer1Score(player1Score + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded">
                +1
            </button>
            <p className="mb-4">Player 2: {player2Score}</p>
            <button
                onClick={() => setPlayer2Score(player2Score + 1)}
                className="bg-green-500 text-white px-4 py-2 rounded">
                +1
            </button>
            <p className="mt-6 text-lg font-semibold">
                Total Score: {totalScore}
            </p>

        </div>


    );

}
export default Scoreboard; 