import { useState } from "react";
import ThemeContext from "./ThemeContext";
// code here

const TodoProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default TodoProvider