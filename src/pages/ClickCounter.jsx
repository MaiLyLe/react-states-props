import { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const getLevel = () => {
    if (count >= 1 && count < 3) return "1";
    if (count >= 3 && count < 5) return "2";
    if (count >= 5) return "3";
    return "0";
  };

  const changeColor = () => {
    if (count >= 1 && count < 3) return "bg-yellow-500";
    if (count >= 3 && count < 5) return "bg-green-500";
    if (count >= 5) return "bg-red-500";
    return "bg-blue-500";
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Click Counter</h2>
      <p className="mb-4">Count: {count}</p>
      <p className="mb-4">Level: {getLevel()}</p>
      <button
        onClick={() => setCount(count + 1)}
        className={"text-white px-4 py-2 rounded " + changeColor()}
      >
        Click me
      </button>
    </div>
  );
}

export default ClickCounter;
