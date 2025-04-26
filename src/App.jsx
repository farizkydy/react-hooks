
import Homepage from "./pages/Homepage";
import ThemeProvider from "./ThemeProvider";
import DisplayTheme from "./components/DisplayTheme";
import ToggleThemeButton from "./components/ToggleThemeButton";

function App() {

  return (
    <ThemeProvider>
      <DisplayTheme />
      <ToggleThemeButton />
    </ThemeProvider>
  );
}


export default App;
