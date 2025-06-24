import { useState } from 'react'

// Child component that receives props
function UserCard({ name, age, email, isActive, onToggleActive }) {
  return (
    <div className={`p-4 rounded-lg border-2 transition-all ${
      isActive 
        ? 'bg-green-50 border-green-300 shadow-md' 
        : 'bg-gray-50 border-gray-300'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          isActive ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-600'
        }`}>
          {isActive ? 'Active' : 'Inactive'}
        </span>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <p><strong>Age:</strong> {age} years old</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
      <button 
        onClick={onToggleActive}
        className={`mt-3 w-full py-2 px-4 rounded-lg transition-colors ${
          isActive 
            ? 'bg-red-500 hover:bg-red-600 text-white' 
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
      >
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  )
}

// Another child component for demonstrating different prop types
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-32 object-cover rounded-lg mb-3"
      />
      <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">${product.price}</span>
        <button 
          onClick={() => onAddToCart(product)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

// Main PropsExample component
function PropsExample() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Johnson', age: 25, email: 'alice@example.com', isActive: true },
    { id: 2, name: 'Bob Smith', age: 30, email: 'bob@example.com', isActive: false },
    { id: 3, name: 'Carol Davis', age: 28, email: 'carol@example.com', isActive: true }
  ])

  const [cart, setCart] = useState([])

  const products = [
    {
      id: 1,
      name: 'React T-Shirt',
      description: 'Comfortable cotton t-shirt with React logo',
      price: 25.99,
      image: 'https://via.placeholder.com/200x150/61DAFB/000000?text=React+Shirt'
    },
    {
      id: 2,
      name: 'JavaScript Mug',
      description: 'Ceramic coffee mug with JS logo',
      price: 12.99,
      image: 'https://via.placeholder.com/200x150/F7DF1E/000000?text=JS+Mug'
    },
    {
      id: 3,
      name: 'CSS Stickers',
      description: 'Set of colorful CSS property stickers',
      price: 8.99,
      image: 'https://via.placeholder.com/200x150/1572B6/FFFFFF?text=CSS+Stickers'
    }
  ]

  const toggleUserActive = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, isActive: !user.isActive }
        : user
    ))
  }

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Props Examples
      </h2>

      {/* User Cards Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">User Cards (Props with Functions)</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {users.map(user => (
            <UserCard
              key={user.id}
              name={user.name}
              age={user.age}
              email={user.email}
              isActive={user.isActive}
              onToggleActive={() => toggleUserActive(user.id)}
            />
          ))}
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Cards (Object Props)</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Shopping Cart</h3>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty. Add some products!</p>
        ) : (
          <div>
            <p className="text-gray-700 mb-3">Items in cart: {cart.length}</p>
            <div className="space-y-2">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white p-2 rounded">
                  <span className="text-gray-800">{item.name}</span>
                  <span className="text-blue-600 font-semibold">${item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-300">
              <p className="text-lg font-bold text-gray-800">
                Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Props Explanation */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-blue-800 mb-3">Key Points About Props:</h4>
        <ul className="list-disc list-inside text-blue-700 space-y-2">
          <li><strong>Read-only:</strong> Props cannot be modified by the receiving component</li>
          <li><strong>Data Flow:</strong> Props flow down from parent to child components</li>
          <li><strong>Any Type:</strong> Props can be strings, numbers, objects, arrays, or functions</li>
          <li><strong>Destructuring:</strong> Use destructuring to extract specific props</li>
          <li><strong>Default Values:</strong> Can provide default values for optional props</li>
          <li><strong>Function Props:</strong> Pass functions as props to enable child-to-parent communication</li>
        </ul>
      </div>
    </div>
  )
}

export default PropsExample 