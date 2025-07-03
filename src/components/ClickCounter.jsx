import { useState } from 'react'

function ClickCounter(){

	const [count,setCount] = useState(0)

	return(

		<div className="bg-white rounded-xl shadow-lg p-8">
      		<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        		Click Counter with Levels
      		</h2>
      		<div className="bg-green-100 text-center">
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
              Click Me!
            </button>

            <h5>Level: {count}</h5>
        </div>
          </div>

)
}

export default ClickCounter