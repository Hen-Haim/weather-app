import { MainCard } from "../Main/MainCard/MainCard";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useState, useEffect, MouseEvent } from "react";
import { getFiveDaysWeather, search, getWeatherPerCity, clearWeatherPerCity } from "../../store/actions";
//css
import "./Search.css";
import "../Main/Main.css";
//models
import { WeatherPerCityModel } from "../../Models/WeatherPerCityModel";
import { DailyForecastsModel } from "../../Models/DailyForecastsModel";
// fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Search = () => {
  const favorites = useSelector((state: RootStateOrAny) => state.favorites);
  const weatherPerCity = useSelector((state: RootStateOrAny) => state.weatherPerCity );
  const searchResults = useSelector((state: RootStateOrAny) => state.searchResults );
  let dailyWeather = useSelector((state: RootStateOrAny) => state.dailyForecasts);
  const dispatch = useDispatch();

  const [searchState, setSearchState] = useState("");
  const [isItSearchResults, setIsItSearchResults] = useState(false);
  const telAviv = 215854;

  useEffect(() => {
    if (favorites[0] === undefined) {
      dispatch(getFiveDaysWeather(telAviv, "Tel Aviv"));        
    }else{
      dispatch(getFiveDaysWeather(favorites[0].Key, favorites[0].LocalizedName));
    }
  }, []);

  useEffect(() => {
    dispatch(clearWeatherPerCity())
    dispatch(search(searchState));
  }, [searchState]);

  const searching = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(clearWeatherPerCity())
    dispatch(search(searchState));
    weatherForCity()
  };

  const weatherForCity = () => {
    for(let i = 0; i< searchResults.length ; i++){
        dispatch(getWeatherPerCity(searchResults[i]))        
    };
    setIsItSearchResults(true)
  };

  return (
    <div className="main">
      <div className="main-container-overlay">
        <div>
          <div className="main-container-header">
            <h4>Search For City</h4>
            <form className="form-inline search-div">
              <input className="form-control mr-sm-2" type="search" onChange={(e) => setSearchState(e.target.value)}
                placeholder="Search" aria-label="Search"
              />
              <button onClick={(e) => searching(e)} className="btn btn-outline-light my-2 my-sm-0" type="submit" >
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </button>
            </form>
          </div>
          <div className="search-cards">
              {isItSearchResults && weatherPerCity?.map(
              ( city: WeatherPerCityModel & DailyForecastsModel, index: number ) => {
                  return <MainCard key={index} city={city}/>
                  }     
              )}
          </div>
          <h3>{dailyWeather[0]?.localizedName}</h3>
          <div className="daily-cards">
            {dailyWeather?.map(
              (city: WeatherPerCityModel & DailyForecastsModel, index: number) => {
                return <MainCard key={100 + index} city={city}/>;
              }
            )}
          </div>            
        </div>
      </div>
      
    </div>
  );
};
