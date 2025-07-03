
function Welcome({name}){

return(
		<div className="bg-white rounded-xl shadow-lg p-8">
      		<h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        		Greeting Component
      		</h2>
          <div className="mt-4 text-center">
            <p className="text-pink-700">
              Hello, {name} !
            </p>

          </div>
      </div>

	)
}

export default Welcome