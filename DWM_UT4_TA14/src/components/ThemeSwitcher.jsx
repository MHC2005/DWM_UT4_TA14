import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === "light" ? "Oscuro" : "Claro"}
    </button>
  );
};

export default ThemeSwitcher;
