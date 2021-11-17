import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useState, useEffect, MouseEvent } from "react";
import { getFiveDaysWeather, search, getWeatherPerCity, sendMessage, getCurrentPosition } from "../../store/actions";
//css
import "./Search.css";
import "../Main/Main.css";
//models
import { WeatherPerCityModel } from "../../Models/WeatherPerCityModel";
import { DailyForecastsModel } from "../../Models/DailyForecastsModel";
// fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DailyWeatherCard } from "../Main/DailyWeatherCard/DailyWeatherCard";
import { SearchCard } from "./SearchCard/SearchCard";


export const Search = () => {
  const weatherPerCity = useSelector((state: RootStateOrAny) => state.weatherPerCity );
  const searchResults = useSelector((state: RootStateOrAny) => state.searchResults );
  const getLocation = useSelector((state: RootStateOrAny) => state.locationResult)
  const dailyWeather = useSelector((state: RootStateOrAny) => state.dailyForecasts);
  const dispatch = useDispatch();

  const [searchState, setSearchState] = useState("");
  const [oneCityWeather, setOneCityWeather] = useState(false);
  const [isItSearchResults, setIsItSearchResults] = useState(false);
  const telAviv = 215854;
  
  useEffect(() => {
    dispatch(sendMessage("")); 
    dispatch(getCurrentPosition());
  }, []);

  useEffect(() => {
    if (getLocation[0] === undefined) {
      dispatch(getFiveDaysWeather(telAviv, "Tel Aviv"));        
    }else{
      dispatch(getFiveDaysWeather(getLocation[0].Key, getLocation[0].LocalizedName));
    }
  }, [getLocation]);

  const searching = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(search(searchState));
    setIsItSearchResults(true)
  };

  const weatherForCity = (event: MouseEvent<HTMLButtonElement>, city: WeatherPerCityModel) => {
    event.preventDefault();
    dispatch(getWeatherPerCity(city)) ;       
    setOneCityWeather(true);
    setIsItSearchResults(false);
  };

  return (
    <div className="main">
      <div className="main-container-overlay">
        <div>
          <div className="main-container-header">
            <h4>Search For City</h4>
            <form className="search-div">
              <div className="input-group">
                <input className="form-control" type="search" onChange={(e) => setSearchState(e.target.value)}
                  placeholder="Search" aria-label="Search" />
                <div className = {isItSearchResults ? "show-drop" : "hide-drop"}>
                  {searchResults?.map(( city: WeatherPerCityModel, index: number ) => {
                    return <button onClick = {(e) =>weatherForCity(e, city)} className="drop-down-btn" key={index}>{ city.LocalizedName }</button>
                  })}
                </div>                                  
              </div>
              <button onClick={(e) => searching(e)} className="btn btn-outline-light my-2 my-sm-0 my-search-btn" type="submit" >
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </button>
            </form>
          </div>
          <div className="search-cards">
              {oneCityWeather && weatherPerCity?.map(( city: WeatherPerCityModel, index: number ) => {
                return <SearchCard key={index} city={city}/>
              })}
          </div>
          <h3>{dailyWeather[0]?.localizedName}</h3>
          <div className="daily-cards">
            {dailyWeather?.map( (city: DailyForecastsModel, index: number) => {
              return <DailyWeatherCard key={index} city={city}/>;
            })}
          </div>            
        </div>
      </div>
    </div>
  );
};
