import "./App.css";
import { Main } from "./components/Main/Main";
import { BrowserRouter, Link } from "react-router-dom";
import logoPic from './assets/main-pic.jpg';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCurrentPosition, themes } from "./store/actions";

function App() {
  const msg = useSelector((state: RootStateOrAny) => state.msg);
  const themesState = useSelector((state: RootStateOrAny) => state.themes);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [themeChanging, setThemeChanging] = useState('light');
  const dispatch = useDispatch();

  const imgStyle = (path: string) => {
    if(currentPath === (path)){
      return "#FFC000";
    } 
    return themeChanging ==='light' ? "rgb(0, 98, 143)" : "rgb(123, 194, 226)";
  }

  useEffect(() => {
    return setCurrentPath(window.location.pathname)
  }, [currentPath]);

  useEffect(() => {
    dispatch(getCurrentPosition());        
  }, [])
  

  const theme = ()=>{
    if(themesState === 'light'){
      setThemeChanging('dark');
      dispatch(themes('dark'))
    }else{
      setThemeChanging('light');
      dispatch(themes('light'))
    }
  }

  return (
    <BrowserRouter>
      <div className = {themeChanging === 'light'? 'app light' : 'app dark'}>
        <header>
          <div className="header-div-app">
            <img src={logoPic} alt="logo" className="logo" />
            <h1>My<span>Weather</span>Guide</h1>  
            <div>
              <button className={themeChanging === 'light'? 'theme-btn dark-btn' : 'theme-btn light-btn'} 
                onClick={theme}>{themeChanging === 'light'? 'Dark' : 'Light'}
              </button>               
            </div>
          </div>
          <div className="nav">
            <Link onClick={()=>setCurrentPath("/home")} to="/home" style={{ color: imgStyle("/home") }}>Home</Link>
            <Link onClick={()=>setCurrentPath("/weather")} to="/weather" style={{ color: imgStyle("/weather") }}>Weather</Link>
            <Link onClick={()=>setCurrentPath("/favorites")} to="/favorites" style={{ color: imgStyle("/favorites") }}>Favorites</Link>
          </div>
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <p>@HenHaim</p>
        </footer>
        <section style={{ display: msg !=='' ? "block" : "none" }}>
          {msg}
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
