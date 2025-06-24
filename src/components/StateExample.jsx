import { useState } from 'react'

function StateExample() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        State Management Examples
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Counter Example */}
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Counter State</h3>
          <div className="text-center mb-4">
            <span className="text-4xl font-bold text-blue-600">{count}</span>
          </div>
          <div className="flex gap-2 justify-center">
            <button 
              onClick={() => setCount(count - 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              -
            </button>
            <button 
              onClick={() => setCount(0)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Reset
            </button>
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              +
            </button>
          </div>
          <p className="text-sm text-blue-700 mt-3">
            State: <code className="bg-blue-200 px-1 rounded">count = {count}</code>
          </p>
        </div>

        {/* Input Example */}
        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Input State</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="mt-4 text-center">
            <p className="text-green-700">
              Hello, <span className="font-semibold">{name || 'Stranger'}!</span>
            </p>
          </div>
          <p className="text-sm text-green-700 mt-3">
            State: <code className="bg-green-200 px-1 rounded">name = "{name}"</code>
          </p>
        </div>

        {/* Toggle Example */}
        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Toggle State</h3>
          <div className="text-center mb-4">
            <div className={`text-2xl mb-2 ${isVisible ? 'text-purple-600' : 'text-gray-400'}`}>
              {isVisible ? '👁️' : '🙈'}
            </div>
            <p className={`font-medium ${isVisible ? 'text-purple-700' : 'text-gray-500'}`}>
              {isVisible ? 'Visible' : 'Hidden'}
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(!isVisible)}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors"
          >
            {isVisible ? 'Hide' : 'Show'}
          </button>
          <p className="text-sm text-purple-700 mt-3">
            State: <code className="bg-purple-200 px-1 rounded">isVisible = {isVisible.toString()}</code>
          </p>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Points About State:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>useState Hook:</strong> Used to declare state variables</li>
          <li><strong>State Updates:</strong> Always use the setter function (e.g., setCount)</li>
          <li><strong>Re-renders:</strong> Changing state causes the component to re-render</li>
          <li><strong>Asynchronous:</strong> State updates are batched and may not be immediate</li>
          <li><strong>Local:</strong> State is local to each component instance</li>
        </ul>
      </div>
    </div>
  )
}

export default StateExample 