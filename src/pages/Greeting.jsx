import { useState } from 'react';

function Welcome() {
  const [name, setName] = useState('');


  return (
    <>

      <label>
        Name:
        <input
          className="bg-white text-black px-2 py-1 border border-gray-300 rounded"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      {name !== '' &&
        <p>Hello, {name}</p>
      }
    </>

  );


}
export default Welcome; 