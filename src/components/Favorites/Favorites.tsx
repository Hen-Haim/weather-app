import { MainCard } from "../Main/MainCard/MainCard";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useEffect } from "react";
import { getFiveDaysWeather } from "../../store/actions";
//css
import "./Favorites.css";
import "../Main/Main.css";
//models
import { WeatherPerCityModel } from "../../Models/WeatherPerCityModel";
import { DailyForecastsModel } from "../../Models/DailyForecastsModel";


export const Favorites = () => {
  const favorites = useSelector((state: RootStateOrAny) => state.favorites);
  let dailyWeather = useSelector((state: RootStateOrAny) => state.dailyForecasts);
  const searchResults = useSelector((state: RootStateOrAny) => state.searchResults);
  const dispatch = useDispatch();

  useEffect(() => {
    if(favorites[0] === undefined && searchResults.length !== 0){
      dispatch(getFiveDaysWeather(searchResults[0].Key, searchResults[0].LocalizedName)); 
      return
    }else if(favorites[0] !== undefined){
      dispatch(getFiveDaysWeather(favorites[0].Key, favorites[0].LocalizedName)); 
      return
    }       
  }, []);

  return (
    <div className="main">
      <div className="main-container-overlay">
        <div>
            <div className="main-container-header">
                <h3>Your Personal Favorites</h3>
            </div> 
            <div className="favorites-cards">
                {favorites?.map((city: WeatherPerCityModel & DailyForecastsModel, index: number) => {
                return <MainCard key={index} city={city} />;
                })}
            </div>
            <h3>{dailyWeather[0]?.localizedName}</h3>
            <div className="daily-cards">
              { dailyWeather?.map((city: DailyForecastsModel & WeatherPerCityModel, index: number) => {
                return <MainCard key={index} city={city}/>;
              })}
            </div>              
        </div>
      </div>
    </div>
  );
};
