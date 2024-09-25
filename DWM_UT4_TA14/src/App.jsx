import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ThemedComponent from "./components/ThemedComponent";

function App() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Gestión de Tema en ReactJS</h1>
        <ThemeSwitcher />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;

