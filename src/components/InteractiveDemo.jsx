import { useState } from 'react'

// Child component that receives props and manages its own state
function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText)
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  return (
    <div className={`p-4 rounded-lg border-2 transition-all ${
      todo.completed 
        ? 'bg-green-50 border-green-300' 
        : 'bg-white border-gray-300'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
          />
          
          {isEditing ? (
            <div className="flex-1 flex space-x-2">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button 
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm transition-colors"
              >
                Save
              </button>
              <button 
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm transition-colors"
              >
                Cancel
              </button>
            </div>
          ) : (
            <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {todo.text}
            </span>
          )}
        </div>
        
        {!isEditing && (
          <div className="flex space-x-2">
            <button 
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// Main InteractiveDemo component
function InteractiveDemo() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React State', completed: false },
    { id: 2, text: 'Understand Props', completed: true },
    { id: 3, text: 'Build Interactive Components', completed: false }
  ])
  
  const [newTodo, setNewTodo] = useState('')
  const [filter, setFilter] = useState('all') // all, active, completed

  const addTodo = () => {
    if (newTodo.trim()) {
      const newId = Math.max(...todos.map(t => t.id), 0) + 1
      setTodos([...todos, { id: newId, text: newTodo.trim(), completed: false }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, text: newText }
        : todo
    ))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Interactive Demo: Todo App
      </h2>
      <p className="text-center text-gray-600 mb-8">
        This example combines both State and Props concepts. The parent component manages the todo list state, 
        while child components receive props and manage their own local state for editing.
      </p>

      {/* Add New Todo */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new todo..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={addTodo}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Add
          </button>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="mb-6">
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'all' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All ({todos.length})
          </button>
          <button 
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'active' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Active ({activeCount})
          </button>
          <button 
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'completed' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Completed ({completedCount})
          </button>
        </div>
      </div>

      {/* Todo List */}
      <div className="space-y-3 mb-6">
        {filteredTodos.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            {filter === 'all' ? 'No todos yet!' : `No ${filter} todos.`}
          </p>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))
        )}
      </div>

      {/* Explanation */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">How This Demonstrates State & Props:</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-blue-600 mb-2">State Management:</h5>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li><strong>Parent State:</strong> todos array, newTodo input, filter selection</li>
              <li><strong>Child State:</strong> isEditing, editText in TodoItem</li>
              <li><strong>State Updates:</strong> addTodo, toggleTodo, deleteTodo, editTodo</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-green-600 mb-2">Props Usage:</h5>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li><strong>Data Props:</strong> todo object passed to TodoItem</li>
              <li><strong>Function Props:</strong> onToggle, onDelete, onEdit callbacks</li>
              <li><strong>Communication:</strong> Child calls parent functions to update state</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InteractiveDemo 