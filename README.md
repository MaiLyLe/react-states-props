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
- Display a "level" based on how many times the button was clicked.
- Optional: Change the button's color when reaching a new level.

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
Build a component that switches between light and dark mode. Please only change some text and bg color in THIS component. It doesn't have to be reflected throughout the App. 

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

## 8. Shopping Cart 🛒

**Goal:**  
Build a mini e-commerce cart system.

**Instructions:**
- Create a product list with items (name, price, image).
- Add "Add to Cart" buttons for each product.
- Show cart total and item count in a separate component.
- Allow removing items from cart.

**Bonus:**  
- Add quantity controls for each item.
- Show a "Checkout" button that clears the cart.

---

## 9. Color Palette Generator 🎨

**Goal:**  
Create a color palette generator with interactive controls.

**Instructions:**
- Generate 5 random colors on page load.
- Add a "Generate New Palette" button.
- Allow clicking on colors to copy their hex value.
- Show color names or hex codes.

**Bonus:**  
- Add a "Lock" feature to keep specific colors when generating new ones.
- Add brightness/contrast controls.

---

## 10. Timer with Controls ⏱️

**Goal:**  
Build a countdown timer with start, pause, and reset functionality.

**Instructions:**
- Create a timer that counts down from a set time (e.g., 60 seconds).
- Add start, pause, and reset buttons.
- Display time remaining in MM:SS format.
- Show an alert when timer reaches zero.

**Bonus:**  
- Allow users to set custom time input.
- Add a progress bar showing time remaining.
- Add sound notification when timer ends.

---

## 11. Quiz App 🧠

**Goal:**  
Create a simple quiz with multiple choice questions.

**Instructions:**
- Store quiz questions as an array of objects.
- Show one question at a time with multiple choice answers.
- Track score and current question number.
- Show final score when quiz is complete.

**Bonus:**  
- Add a "Review Answers" feature.
- Show correct/incorrect feedback immediately.
- Add a timer for each question.

---

## 12. Weather Widget 🌤️

**Goal:**  
Build a weather display component (simulated data).

**Instructions:**
- Create a weather object with temperature, condition, and location.
- Display weather info in a card format.
- Add a "Refresh" button to simulate new weather data.
- Show different icons based on weather condition.

**Bonus:**  
- Add temperature unit toggle (Celsius/Fahrenheit).
- Show 5-day forecast.
- Add weather animations or transitions.

---

## 13. Password Strength Checker 🔐

**Goal:**  
Create a password input with real-time strength validation.

**Instructions:**
- Create a password input field.
- Show strength meter (weak, medium, strong).
- Display requirements checklist (length, numbers, symbols, etc.).
- Change colors based on strength level.

**Bonus:**  
- Add password visibility toggle.
- Show password generation suggestions.
- Add character count indicator.

---

## 14. Memory Card Game 🃏

**Goal:**  
Build a simple memory matching game.

**Instructions:**
- Create a grid of cards (start with 6-8 cards).
- Cards should flip when clicked.
- Match pairs to remove them from the game.
- Track moves and time taken.

**Bonus:**  
- Add different difficulty levels (more cards).
- Show best score/time.
- Add card animations and sound effects.

---

## 15. Todo List with Categories 📝

**Goal:**  
Enhance the basic todo list with categories and filtering.

**Instructions:**
- Add category selection when creating todos (Work, Personal, Shopping, etc.).
- Show filter buttons to display todos by category.
- Add priority levels (High, Medium, Low).
- Show category-based statistics.

**Bonus:**  
- Add due dates for todos.
- Create a calendar view.
- Add search functionality.

---

## 16. Currency Converter 💱

**Goal:**  
Build a currency conversion calculator.

**Instructions:**
- Create input fields for amount and currency selection.
- Support at least 3-4 currencies (USD, EUR, GBP, JPY).
- Show converted amount in real-time.
- Use fixed exchange rates (for demo purposes).

**Bonus:**  
- Add more currencies.
- Show conversion history.
- Add favorite currencies feature.

---

## 17. Recipe Calculator 👨‍🍳

**Goal:**  
Create a recipe ingredient calculator.

**Instructions:**
- Store a recipe with ingredients and quantities.
- Allow users to adjust serving size.
- Automatically recalculate all ingredient amounts.
- Show total cooking time and difficulty.

**Bonus:**  
- Add ingredient categories (proteins, vegetables, spices).
- Show nutritional information.
- Add cooking instructions with step-by-step display.

---

## 18. Music Player Controls 🎵

**Goal:**  
Build a music player interface (without actual audio).

**Instructions:**
- Create play, pause, next, previous buttons.
- Show current track info (title, artist, album).
- Display a progress bar for track position.
- Add volume control slider.

**Bonus:**  
- Add a playlist with multiple tracks.
- Show album artwork.
- Add shuffle and repeat modes.

---

## 19. Form Validation 📋

**Goal:**  
Create a registration form with real-time validation.

**Instructions:**
- Build a form with name, email, password, and confirm password.
- Show validation errors in real-time.
- Disable submit button until form is valid.
- Show success message on valid submission.

**Bonus:**  
- Add phone number validation.
- Show password strength indicator.
- Add terms and conditions checkbox.

---

## 20. Advanced State Management 🔄

**Goal:**  
Practice complex state scenarios.

**Instructions:**
- Create a multi-step form (3-4 steps).
- Allow navigation between steps.
- Validate each step before proceeding.
- Show progress indicator.
- Allow going back to previous steps.

**Bonus:**  
- Add form data persistence (localStorage).
- Show step completion status.
- Add animations between steps.

---

✅ **Tip for all tasks:**  
Use `useState`, `props`, and conditional rendering. Don't be afraid to break things while learning!

**Difficulty Levels:**
- 🟢 **Beginner**: Tasks 1-7 (Basic concepts)
- 🟡 **Intermediate**: Tasks 8-15 (More complex interactions)
- 🔴 **Advanced**: Tasks 16-20 (Complex state management)

**Learning Path:**
1. Start with the basic tasks to understand fundamentals
2. Move to intermediate tasks to practice real-world scenarios
3. Challenge yourself with advanced tasks to master complex state management




