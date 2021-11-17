import "./App.css";
import { Main } from "./components/Main/Main";
import { BrowserRouter, Link } from "react-router-dom";
import logoPic from "./assets/main-pic.jpg";
import { RootStateOrAny, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const msg = useSelector((state: RootStateOrAny) => state.msg);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [themeChanging, setThemeChanging] = useState("light");

  const imgStyle = (path: string) => {
    if (currentPath === path) {
      return "#FFC000";
    }
    return themeChanging === "light" ? "rgb(0, 98, 143)" : "rgb(123, 194, 226)";
  };

  useEffect(() => {
    return setCurrentPath(window.location.pathname);
  }, [currentPath]);

  const theme = () => {
    themeChanging === "light" ? setThemeChanging("dark") : setThemeChanging("light");
  };

  return (
    <BrowserRouter>
      <div className={themeChanging === "light" ? "app light" : "app dark"}>
        <header>
          <div className="header-div-app">
            <img src={logoPic} alt="logo" className="logo" />
            <h1> My<span>Weather</span>Guide </h1>
          </div>
          <div className="switch-container">
            <label id="switch" className="switch">
              <input onChange={theme} type="checkbox" id="slider"/>
              <span className="slider round icon "></span>
            </label>              
          </div>          
          <div className="nav">
            <Link onClick={() => setCurrentPath("/home")} to="/home" style={{ color: imgStyle("/home") }} > Home </Link>
            <Link onClick={() => setCurrentPath("/weather")} to="/weather" style={{ color: imgStyle("/weather") }} > Weather </Link>
            <Link onClick={() => setCurrentPath("/favorites")} to="/favorites" style={{ color: imgStyle("/favorites") }} > Favorites </Link>
          </div>
        </header>
        <main> <Main /> </main>
        <footer> <p>@HenHaim</p> </footer>
        <section style={{ display: msg !== "" ? "block" : "none" }}> {msg} </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
