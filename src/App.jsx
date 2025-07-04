import { Route, Link, Switch } from 'wouter';
import ClickCounter from './pages/ClickCounter.jsx';
import HomePage from './pages/HomePage.jsx';
import Welcome from './pages/Greeting.jsx';
import DiceRoller from './pages/DiceRoller.jsx';
import LikeButton from './pages/LikeButton.jsx';
import ToggleTheme from './pages/ToggleTheme.jsx';
import Scoreboard from './pages/Scoreboard.jsx';
import ShoppingCart from './pages/ShoppingCart.jsx';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-lg">
        <nav className="flex gap-4 p-4">
          <Link href="/" className="text-blue-500 hover:underline">Home</Link>
          <Link href="/counter" className="text-blue-500 hover:underline">Counter</Link>
          <Link href="/welcome" className="text-blue-500 hover:underline">Greeting</Link>
          <Link href="/dice" className="text-blue-500 hover:underline">Dice Roller</Link>
          <Link href="/like_button" className="text-blue-500 hover:underline">Like Button</Link>
          <Link href="/toggle_theme" className="text-blue-500 hover:underline">Toggle Theme</Link>
          <Link href="/scoreboard" className="text-blue-500 hover:underline">Scoreboard</Link>
          <Link href="/shopping_cart" className="text-blue-500 hover:underline">Shopping Cart</Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/counter" component={ClickCounter} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/dice" component={DiceRoller} />
          <Route path="/like_button" component={LikeButton} />
          <Route path="/toggle_theme" component={ToggleTheme} />
          <Route path="/scoreboard" component={Scoreboard} />
          <Route path="/shopping_cart" component={ShoppingCart} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
