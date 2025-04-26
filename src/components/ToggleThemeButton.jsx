import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function ToggleThemeButton() {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
    </>
  )
}

export default ToggleThemeButton;