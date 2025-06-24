# React States & Props Tutorial

This is an interactive React application designed to teach students about React state management and prop passing. It's perfect for beginners who want to understand these fundamental React concepts!

## What's in this project?

- **Interactive Examples**: Live demonstrations of state and props concepts
- **State Management**: Examples showing how to use useState hook
- **Props Usage**: Demonstrations of passing data between components
- **Combined Demo**: A todo app that combines both concepts
- **Tailwind CSS**: Modern styling with utility classes

## How to run this project

1. Open your terminal
2. Run `npm install` to install all the dependencies
3. Run `npm run dev` to start the development server
4. Open your browser and go to `http://localhost:5173`

## What you'll learn

### State Management
- How to use the `useState` hook
- Managing component state
- State updates and re-renders
- Different types of state (counters, forms, toggles)

### Props Usage
- Passing data from parent to child components
- Function props for child-to-parent communication
- Object and array props
- Read-only nature of props

### Interactive Features
- Counter with increment/decrement
- Form input with real-time updates
- Toggle visibility
- User management with active/inactive states
- Shopping cart functionality
- Todo app with CRUD operations

## Project Structure

```
react-states-props/
├── src/
│   ├── components/           # React components
│   │   ├── StateExample.jsx  # State management examples
│   │   ├── PropsExample.jsx  # Props usage examples
│   │   └── InteractiveDemo.jsx # Combined todo app demo
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Tailwind CSS imports
├── public/                  # Static files
├── index.html              # Main HTML file
└── package.json            # Project configuration
```

## Key Concepts Covered

### State
- **Definition**: Component's internal memory that can change over time
- **Usage**: `const [state, setState] = useState(initialValue)`
- **Updates**: Always use setter functions
- **Effects**: State changes cause component re-renders

### Props
- **Definition**: Data passed from parent to child components
- **Characteristics**: Read-only, immutable
- **Types**: Strings, numbers, objects, arrays, functions
- **Purpose**: Make components reusable and configurable

## Interactive Examples

1. **Counter State**: Increment, decrement, and reset functionality
2. **Input State**: Real-time form input with controlled components
3. **Toggle State**: Show/hide functionality with boolean state
4. **User Cards**: Props with function callbacks for state updates
5. **Product Cards**: Object props with shopping cart integration
6. **Todo App**: Complete CRUD application combining state and props

## Next Steps




# 🧩 React Exercises: Learn State & Props (JS + Tailwind)

These tasks will help you explore how React works with `state` and `props` in real components.

---

## Setup: Create navigation routes for each task you are starting with Wouter and create a navigation menu at the top of the page



## 1. Click Counter with Levels 🚀

**Goal:**  
Create a button that counts how often it's been clicked.

**Bonus:**  
- Display a “level” based on how many times the button was clicked.
- Optional: Change the button’s color when reaching a new level.

---

## 2. Greeting Component 👋

**Goal:**  
Create a component called `<Welcome />` that shows a personalized greeting.

**Instructions:**
- Pass a `name` as a prop.
- The component should display: "Hello, [name]!"

**Bonus:**  
- Show a different greeting depending on the time of day (e.g. "Good morning").

---

## 3. Dice Roller 🎲

**Goal:**  
Create a dice-rolling component that shows a number between 1 and 6.

**Instructions:**
- Add a button labeled "Roll Dice".
- Each click should generate a new random number.

**Bonus:**  
- Display a matching emoji or dice image for each number.

---

## 4. Like Button ❤️

**Goal:**  
Create a component where clicking a button increases a "likes" counter in the parent.

**Instructions:**
- The child (`<LikeButton />`) should not manage the count itself.
- Pass a function from the parent to update the count.

**Bonus:**  
- Add two buttons and show the total likes from both combined.

---

## 5. Toggle Theme 🌗

**Goal:**  
Build a component that switches between light and dark mode.

**Instructions:**
- Use a `darkMode` boolean state.
- Change background and text color depending on the state.

**Bonus:**  
- Show a moon or sun emoji depending on the mode.

---

## 6. Scoreboard 🎯

**Goal:**  
Build a simple app that tracks points for two or more players.

**Instructions:**
- Each player has their own score and increment button.
- The parent component keeps track of the total score.

**Bonus:**  
- Let users enter their name and dynamically create new players.

---

## 7. Props & State Recap 🌟

**Research & Reflection:**

- Please finish the research tasks in the presentation
- When should you use props? When should you use state?
- What happens when you pass state down as a prop?
- Why can't a child component directly change a prop?

Write your answers in your own words.

---

✅ **Tip for all tasks:**  
Use `useState`, `props`, and conditional rendering. Don't be afraid to break things while learning!




