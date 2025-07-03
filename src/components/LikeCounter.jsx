import React, { useState } from 'react';

function LikeCounter() {

  // Child component defined inside the parent
  const LikeButton = ({ onClick }) => {
    return (
      <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors" onClick={onClick}>Click to Like!</button>
    );
  };

  const [like, setLike] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        		Like Counter
      		</h2>	
      <h3>Likes: {like} </h3>
      <LikeButton onClick={() => setLike(like+1)} />
    </div>
  );
}

export default LikeCounter;
