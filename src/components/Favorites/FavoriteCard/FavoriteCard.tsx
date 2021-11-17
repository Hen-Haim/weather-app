import { WeatherPerCityModel } from "../../../Models/WeatherPerCityModel";
import { useState, useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromFavorites, addToFavorites } from "../../../store/actions";
//css
import "./FavoriteCard.css";
// fontawesome imports
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const FavoriteCard = (props: { city: WeatherPerCityModel}) => {
  const favorites = useSelector((state: RootStateOrAny) => state.favorites);
  const [addIcon, setAddIcon] = useState<number>(0);
  const dispatch = useDispatch();
  const [unitChanging, setUnitChanging] = useState('c');

  useEffect(() => {
    iconForFavorite();
  }, [ addIcon]);

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

  return (
    <div className="favorite-card">
        <FontAwesomeIcon onClick={favoritesIcon} icon={addIcon !== 0 ? faMinusSquare : faPlusSquare}
          className="favorite-add-or-remove"
        />
        <p>{props.city?.LocalizedName}</p>
        <div className="favorite-temp-div">
          <p>{unitChanging === 'c' ? props.city?.Temperature?.Metric?.Value : props.city?.Temperature?.Imperial?.Value} &#176;</p>
          <p>{unitChanging === 'c' ? props.city?.Temperature?.Metric?.Unit : props.city?.Temperature?.Imperial?.Unit}</p>
          <div>
            <button className={unitChanging === 'c'? 'favorite-temp-c-btn' : 'favorite-temp-f-btn'} 
              onClick={unitChangingFunc}>{unitChanging === 'c'? 'f' : 'c'}
            </button>               
          </div>
        </div>
        <p>{props.city?.WeatherText}</p>
    </div>
  )
}
