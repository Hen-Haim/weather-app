import { WeatherPerCityModel } from "../../../Models/WeatherPerCityModel";
import { useState, useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromFavorites, addToFavorites, getFiveDaysWeather} from "../../../store/actions";
//css
import "./SearchCard.css";
// fontawesome imports
import { faPlusSquare, faThermometerEmpty, faThermometerHalf, faThermometerQuarter, faThermometerThreeQuarters} from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchCard = (props: { city: WeatherPerCityModel}) => {
  const favorites = useSelector((state: RootStateOrAny) => state.favorites);
  const [addIcon, setAddIcon] = useState<number>(0);
  const dispatch = useDispatch();
  const [unitChanging, setUnitChanging] = useState('c');
  const [color, setColor] = useState('');
  const [icon, setIcon] = useState(faThermometerHalf)

  useEffect(() => {
    iconForFavorite();
  }, [ addIcon ]);

  const dailyForecastForThisCity = () => {
    props.city?.LocalizedName && dispatch(getFiveDaysWeather(+props.city.Key, props.city.LocalizedName));
  };

  const iconForFavorite = () => {
    let check = false;
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].Key == +props.city.Key) {
        setAddIcon(+props.city.Key);
        check = true;
      }
    }
    check !== true && setAddIcon(0);
  };

  const unitChangingFunc = ()=>{
    unitChanging === 'c' ? setUnitChanging('f') : setUnitChanging('c');
  }
  
  const favoritesIcon = () => {
    if (addIcon == +props.city.Key) {
      dispatch(removeFromFavorites(props.city, favorites));  
      return setAddIcon(0);
    }
    dispatch(addToFavorites(props.city));
    return setAddIcon(+props.city.Key);
  };
  
  const getDate = (date: string | undefined) => {
    date === undefined && (date = `${new Date().getDay()}`)
    const d = new Date(date);
    const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    return weekday[d.getDay()];
  };

  useEffect(() => {
    if (props.city?.Temperature?.Metric?.Value) {
      if (+props.city?.Temperature?.Metric?.Value < 0) {
        setIcon(faThermometerEmpty);
        return setColor("blue");
      }
      if (+props.city?.Temperature?.Metric?.Value < 15) {
        setIcon(faThermometerQuarter);
        return setColor("cyan");
      }
      if (+props.city?.Temperature?.Metric?.Value <= 30) {
        setIcon(faThermometerHalf);
        return setColor("orange");
      }
    }
    setIcon(faThermometerThreeQuarters);
    setColor("red");
  }, [props.city?.Temperature?.Metric?.Value ])

  return (
    <div className="search-card-container">
      <FontAwesomeIcon onClick={favoritesIcon} icon={addIcon !== 0 ? faMinusSquare : faPlusSquare}
        className="add-or-remove"
      />
      <p>{getDate(props.city?.LocalObservationDateTime)}</p>
      <p>{props.city?.LocalObservationDateTime.slice(11, 16)}</p>
      <p>{props.city?.LocalizedName}</p>
      <div className="temp-div">
        <p>{unitChanging === 'c' ? props.city?.Temperature?.Metric?.Value : props.city?.Temperature?.Imperial?.Value} &#176;</p>
        <p>{unitChanging === 'c' ? props.city?.Temperature?.Metric?.Unit : props.city?.Temperature?.Imperial?.Unit}</p>
        <div>
          <button className={unitChanging === 'c' ? 'temp-c-btn' : 'temp-f-btn'} 
            onClick={unitChangingFunc}>{unitChanging === 'c' ? 'f' : 'c'}
          </button>               
        </div>
      </div>
      <p>{props.city?.WeatherText}</p>
      <FontAwesomeIcon icon={icon} style={{ color: color }} className = "temperature-icon" />
      <button onClick={dailyForecastForThisCity} className = "daily-forecast-btn" > Forecast </button>
    </div>
  )
}
