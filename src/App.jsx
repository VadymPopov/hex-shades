import { useState, useEffect } from "react";
import Values from 'values.js';
import { toast } from 'react-toastify';
import Form from "./components/Form";
import ColorList from "./components/ColorList";
import ThemeToggle from "./components/ThemeToggle";

const getInitialColorList = () => {
  const color = localStorage.getItem('color') || '#06b1ea';
  const colorList = new Values(color).all(10);
  return colorList;
}

const getInitialMode = () => {
  const storedMode = localStorage.getItem('darkTheme') === 'true';
  return storedMode;
}

const App = () => {
  const [colors, setColors] = useState(getInitialColorList());
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialMode());

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('darkTheme', newTheme);
  }

  useEffect(()=>{
   document.body.classList.toggle('dark', isDarkTheme);
  }, [isDarkTheme])


  const addColor = (color) =>{
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
      localStorage.setItem('color', color)
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <main className="container mx-auto p-5 dark:bg-dark-bg transition ease-out duration-700">
      <div className="flex justify-between items-center mb-5">
       <Form addColor={addColor}/>
       <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>
      </div>
       <ColorList colors={colors}/>
    </main>
  )
};

export default App;
