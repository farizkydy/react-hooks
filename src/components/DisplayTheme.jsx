import { useContext } from "react";
import ThemeContext from "../ThemeContext";


function DisplayTheme() {
  const { theme } = useContext(ThemeContext)
 return (
  <section id="tentang" class="pt-32 sm:px-10 lg:px-20 xl:px-40">
   Theme: {theme}
  </section>
 )
}

export default DisplayTheme;