import { useState } from 'react';
import './App.css';
import ImageGenerator from './components/ImageGenerator';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <ImageGenerator />
    </div>
  );
}

export default App;
