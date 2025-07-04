import { useState } from 'react';

function ToggleTheme () {
  const [darkMode, setDarkMode] = useState(false);

  const ThemeChanger = () => {
        setDarkMode( !darkMode );
  }

  return (
    <div className={`p-6 rounded-lg text-center ${darkMode ? "bg-gray-900 text-white" : "bg-white-900 text-black"}`}>
    <button onClick={ThemeChanger}>
        
        Theme
    </button>
    </div>
  );
}

export default ToggleTheme;