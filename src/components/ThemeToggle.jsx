import {FaMoon, FaSun} from 'react-icons/fa';

const ThemeToggle = ({toggleTheme, isDarkTheme}) => {
  return (
    <section >
        <button onClick={toggleTheme}>{isDarkTheme ? <FaMoon/> : <FaSun/>}
        </button>
      
    </section>
  )
}

export default ThemeToggle