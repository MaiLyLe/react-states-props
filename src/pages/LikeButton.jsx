import { useState } from 'react';


function ParentLike() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  }

  return (
    <div className="text-center mt-8">
      <LikeButton onClick={add} />
      <p className="mt-4 font-bold">Likes: {count}</p>
    </div>
  );
}


function LikeButton({ onClick }) {

  return (
    <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      Like
    </button>
  )
}

export default ParentLike;
