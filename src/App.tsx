import "./App.css";
import { Main } from "./components/Main/Main";
import { BrowserRouter, Link } from "react-router-dom";
import logoPic from './assets/main-pic.jpg';
import { RootStateOrAny, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const msg = useSelector((state: RootStateOrAny) => state.msg);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const imgStyle = (path: string) => {
    if(currentPath === (path)){
      return "#FFC000";
    } 
    return "rgb(0, 98, 143)";
  }

  useEffect(() => {
    return setCurrentPath(window.location.pathname)
  }, [currentPath]);

  const createPath = (path: string)=>{
    setCurrentPath(path)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="header-div-app">
            <img src={logoPic} alt="logo" className="logo" />
            <h1>My<span>Weather</span>Guide</h1>            
          </div>
          <div className="nav">
            <Link onClick={()=>createPath("/home")} to="/home" style={{ color: imgStyle("/home") }}>Home</Link>
            <Link onClick={()=>createPath("/weather")} to="/weather" style={{ color: imgStyle("/weather") }}>Weather</Link>
            <Link onClick={()=>createPath("/favorites")} to="/favorites" style={{ color: imgStyle("/favorites") }}>Favorites</Link>
          </div>
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <p>@HenHaim</p>
        </footer>
        <section style={{ display: msg !='' ? "block" : "none" }}>
          {msg}
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
