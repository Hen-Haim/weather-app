import { useSelector, RootStateOrAny } from "react-redux";
//css
import "./Favorites.css";
import "../Main/Main.css";
//models
import { WeatherPerCityModel } from "../../Models/WeatherPerCityModel";
import { FavoriteCard } from "./FavoriteCard/FavoriteCard";


export const Favorites = () => {
  const favorites = useSelector((state: RootStateOrAny) => state.favorites);

  return (
    <div className="main">
      <div className="main-container-overlay">
        <div>
            <div className="main-container-header">
                <h3>Your Personal Favorites</h3>
            </div> 
            <div className="favorites-cards">
                {favorites?.map((city: WeatherPerCityModel, index: number) => {
                return <FavoriteCard key={index} city={city} />;
                })}
            </div>
        </div>
      </div>
    </div>
  );
};
