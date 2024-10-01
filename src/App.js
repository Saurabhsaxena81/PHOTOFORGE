import Home from "./components/Home";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HowToUse from "./components/howToUse";
import Demo from "./components/Demo";
import GetStarted from "./components/getStarted";
import Footer from "./components/Footer";
// import "./components/theme.css";
import { ThemeProvider } from "./components/ThemeContext";
export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  return (
    <Div className="overflow-x-hidden">
      <ThemeProvider>
        <Navbar theme={theme} setTheme={setTheme} />
        <Home theme={theme} />
        <HowToUse theme={theme} />
        <Demo id="demo" theme={theme} />
        <GetStarted id="get-started" theme={theme} />
        <Footer theme={theme} />
      </ThemeProvider>
    </div>
  );
}
