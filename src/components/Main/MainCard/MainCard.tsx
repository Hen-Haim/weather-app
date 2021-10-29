import { WeatherPerCityModel } from "../../../Models/WeatherPerCityModel";
import { useState, useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromFavorites, addToFavorites, getFiveDaysWeather} from "../../../store/actions";
//css
import "./MainCard.css";
// fontawesome imports
import { faPlusSquare, faSun, faThermometerEmpty, faThermometerHalf, faThermometerQuarter, faThermometerThreeQuarters} from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DailyForecastsModel } from "../../../Models/DailyForecastsModel";


export const MainCard = (props: { city: WeatherPerCityModel & DailyForecastsModel}) => {
  const favorites = useSelector((state: RootStateOrAny) => state.favorites);
  const [addIcon, setAddIcon] = useState<number>(0);
  const dispatch = useDispatch();
  const [existOnFavorite, setExistOnFavorite] = useState(false);
  const [uniteChanging, setUniteChanging] = useState('c');

  useEffect(() => {
    iconForFavorite();
  }, [favorites, addIcon]);

  const dailyForecastForThisCity = () => {
    props.city.Key && props.city?.LocalizedName && dispatch(getFiveDaysWeather(props.city.Key, props.city.LocalizedName));
  };

  const iconForFavorite = () => {
    let check = false;
    if (props.city.Key) {
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].Key === props.city.Key) {
          setExistOnFavorite(true);
          setAddIcon(+props.city.Key);
          check = true;
        }
      }
      if (check !== true) {
        setExistOnFavorite(false);
        setAddIcon(0);
      }
    }
  };

  const uniteChangingFunc = ()=>{
    if(uniteChanging === 'c'){
      setUniteChanging('f');
    }else{
      setUniteChanging('c');
    }
  }

  const favoritesIcon = () => {
    if (props.city.Key) {
      if (addIcon == +props.city.Key) {
        dispatch(removeFromFavorites(props.city));
        setAddIcon(0);
        return iconForFavorite();
      }
      dispatch(addToFavorites(props.city));
      if (props.city.Key) {
        setAddIcon(+props.city.Key);
      }
      iconForFavorite();
    }
  };

  const getDate = (date: string | undefined) => {
    if (date === undefined) {
      date = `${new Date().getDay()}`;
    }
    const d = new Date(date);
    const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    return weekday[d.getDay()];
  };

  const temperature = () => {
    if (props.city?.Temperature?.Metric?.Value) {
      if (+props.city?.Temperature?.Metric?.Value < 0) {
        return faThermometerEmpty;
      }
      if (+props.city?.Temperature?.Metric?.Value < 15) {
        return faThermometerQuarter;
      }
      if (+props.city?.Temperature?.Metric?.Value <= 30) {
        return faThermometerHalf;
      }
    }
    return faThermometerThreeQuarters;
  };

  const temperatureColor = () => {
    if (props.city?.Temperature?.Metric?.Value) {
      if (+props.city?.Temperature?.Metric?.Value < 0) {
        return "blue";
      }
      if (+props.city?.Temperature?.Metric?.Value < 15) {
        return "cyan";
      }
      if (+props.city?.Temperature?.Metric?.Value <= 30) {
        return "orange";
      }
    }
    return "red";
  };

  return (
    <div className="cards-container">
      {/* weather per city */}
      {
        props.city?.LocalObservationDateTime && ( 
          <>
            <FontAwesomeIcon onClick={favoritesIcon} icon={existOnFavorite ? faMinusSquare : faPlusSquare}
              className="add-or-remove"
            />
            <p>{getDate(props.city?.LocalObservationDateTime)}</p>
            <p>{props.city?.LocalObservationDateTime.slice(11, 16)}</p>
            <p>{props.city?.LocalizedName}</p>
            <div className="temp-div">
              <p>{uniteChanging === 'c' ? props.city?.Temperature?.Metric?.Value : props.city?.Temperature?.Imperial?.Value} &#176;</p>
              <p>{uniteChanging === 'c' ? props.city?.Temperature?.Metric?.Unit : props.city?.Temperature?.Imperial?.Unit}</p>
              <div>
              <button className={uniteChanging === 'c'? 'temp-c-btn' : 'temp-f-btn'} 
                onClick={uniteChangingFunc}>{uniteChanging === 'c'? 'f' : 'c'}
                </button>               
              </div>
            </div>
            <p>{props.city?.WeatherText}</p>
            <FontAwesomeIcon icon={temperature()} style={{ color: temperatureColor() }}
              className="temperature-icon"
            />
            <button onClick={dailyForecastForThisCity} className="daily-forecast-btn" >
              Daily Forecast
            </button>
          </>
        )
      }
      {/* daily weather */}
      {props.city?.Date && (
        <>
          <FontAwesomeIcon icon={faSun} className="temp-icon" />
          <div className="temperature time">
            <p>{getDate(props.city?.Date)}, </p>
            <p>{props.city?.Date?.slice(11, 16)}</p>
          </div>
          <div className="temperature">
            <p>{props.city?.Temperature?.Minimum?.Value}</p>
            <p>{props.city?.Temperature?.Minimum?.Unit}~</p>
            <p>{props.city?.Temperature?.Maximum?.Value}</p>
            <p>{props.city?.Temperature?.Maximum?.Unit}</p>
          </div>
        </>
      )}
    </div>
  );
};
