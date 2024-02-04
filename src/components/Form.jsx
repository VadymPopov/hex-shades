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
      <section className="p-2">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input className="max-w-full max-h-full cursor-pointer hover:shadow-xl  outline-blue-500 dark:outline-dark-text transition " type="color" value={color} onChange={handleChange}/>
        <input className="ml-2 px-4 py-2 border-2 rounded-lg border-gray-300 outline-0 hover:border-blue-500 hover:shadow-lg focus:border-blue-500 dark:hover:border-dark-text dark:focus:border-dark-text dark:bg-black dark:border-transparent dark:text-white transition placeholder:italic" type="text" value={color} onChange={handleChange} placeholder='#06b1ea' />
        <button className="uppercase text-white ml-2 px-4 py-2 border-2 rounded-lg bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition outline-slay-800  dark:bg-dark-text dark:border-dark-text dark:hover:bg-black" type='submit'>Generate</button>
      </form>
      </section>
    )
  }
  
  export default Form;