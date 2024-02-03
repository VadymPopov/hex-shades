import { useState } from "react";

const Form = ({addColor}) => {
    const [color, setColor] = useState('');
  
    const handleChange = (e)=>{
      setColor(e.target.value);
    };
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      addColor(color);
    };
  
    return (
      <section>
      <h4>color generator</h4>
      <form onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={handleChange}/>
        <input type="text" value={color} onChange={handleChange} placeholder='#06b1ea' />
        <button type='submit'  style={{ background: color }}>Generate</button>
      </form>
      </section>
    )
  }
  
  export default Form;