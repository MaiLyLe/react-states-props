import { useState } from 'react';

function DiceRoller() {
    const [number, setNumber] = useState(0);

const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const handleClick = () => {
        setNumber(randomNumberInRange(1, 6));
    };

    return (
        <div className="wrapper">
            <h2>Number is: {number}</h2>
            <button onClick={handleClick} className= "bg-blue-500 text-white px-4 py-2 rounded">
                Roll Dice
            </button>
        </div>
    );
};


export default DiceRoller;