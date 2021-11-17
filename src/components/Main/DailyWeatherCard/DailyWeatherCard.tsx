//css
import "./DailyWeatherCard.css";
// fontawesome imports
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DailyForecastsModel } from "../../../Models/DailyForecastsModel";


export const DailyWeatherCard = (props: { city: DailyForecastsModel}) => {

  const getDate = (date: string | undefined) => {
      if (date === undefined) {
        date = `${new Date().getDay()}`;
      }
      const d = new Date(date);
      const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
      return weekday[d.getDay()];
    };

  return (
      <div>
          <FontAwesomeIcon icon={faSun} className="temp-icon" />
        <div className="temperature time">
          <p>{getDate(props.city?.Date)}</p>
          <p>{props.city?.Date?.slice(11, 16)}</p>
        </div>
        <div className="temperature units">
          <p>{props.city?.Temperature?.Minimum?.Value}</p>
          <p>{props.city?.Temperature?.Minimum?.Unit}~</p>
          <p>{props.city?.Temperature?.Maximum?.Value}</p>
          <p>{props.city?.Temperature?.Maximum?.Unit}</p>
        </div>
      </div>
  )
}
