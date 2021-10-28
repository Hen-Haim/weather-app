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

  const dispatch = useDispatch();
  const telAviv = 215854;

  useEffect(() => {
      if(favorites[0] === undefined){
        dispatch(getFiveDaysWeather(telAviv));        
      }else{
        dispatch(getFiveDaysWeather(favorites[0].Key));
      }
  }, []);

  return (
    <div className="main">
      <div className="daily-cards">
        { dailyWeather?.map((city: DailyForecastsModel & WeatherPerCityModel, index: number) => {
          return <MainCard key={index} city={city}/>;
        })}
      </div>
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
        </div>
      </div>
    </div>
  );
};
