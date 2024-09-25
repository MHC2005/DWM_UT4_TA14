import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedComponent = () => {
  const { theme } = useContext(ThemeContext);

  const lightStyle = {
    backgroundColor: "#fff",
    color: "#000",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
  };

  const darkStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
  };

  return (
    <div style={theme === "light" ? lightStyle : darkStyle}>
      El tema actual es {theme === "light" ? "Claro" : "Oscuro"}
    </div>
  );
};

export default ThemedComponent;
