import { useState } from "react";
import Values from 'values.js';
import { toast } from 'react-toastify';
import Form from "./components/Form";
import ColorList from "./components/ColorList";

const colorList = new Values('#06b1ea').all(10);

const App = () => {
  const [colors, setColors] = useState(colorList);
  console.log(colors)

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
       <Form addColor={addColor}/>
       <ColorList colors={colors}/>
    </main>
  )
};

export default App;
