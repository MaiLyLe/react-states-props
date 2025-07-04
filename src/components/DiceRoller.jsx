import { useState } from 'react'

function getRandomDiceValue(){
	return 1 + Math.floor(Math.random() * 6);
}

function DiceRoller(){

	const [value,setValue] = useState('')

	const handleClick = () =>
		{
			const newValue = getRandomDiceValue();
			setValue(newValue);
		}

	return(

		<div className="bg-white rounded-xl shadow-lg p-8">
      		<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        		Dice Roller
      		</h2>
      		<div className="bg-orange-100 text-center">
            <button 
              onClick={handleClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
              Roll Dice
            </button>
            	<h5>Value: {value}</h5>
        	</div>
       </div>


)
}

export default DiceRoller