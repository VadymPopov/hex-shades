import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = ({ toggleTheme, isDarkTheme }) => {
  return (
    <div>
      <button onClick={toggleTheme}>
        {isDarkTheme ? (
          <FaMoon className="icon fill-gray-200" />
        ) : (
          <FaSun className="icon fill-yellow-400 " />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
