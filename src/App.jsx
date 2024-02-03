import { useState, useEffect } from "react";
import Values from 'values.js';
import { toast } from 'react-toastify';
import Form from "./components/Form";
import ColorList from "./components/ColorList";
import ThemeToggle from "./components/ThemeToggle";

const colorList = new Values('#06b1ea').all(10);
const getInitialMode = () => {
  const storedMode = localStorage.getItem('darkTheme') === 'true';
  return storedMode;
}

const App = () => {
  const [colors, setColors] = useState(colorList);
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialMode());

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('darkTheme', newTheme);
  }

  useEffect(()=>{
   document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme])


  const addColor = (color) =>{
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <main>
      <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>
       <Form addColor={addColor}/>
       <ColorList colors={colors}/>
    </main>
  )
};

export default App;
