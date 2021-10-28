import { WeatherPerCityModel } from "./WeatherPerCityModel";
import { AllActionType } from "./ActionsType";
import { DailyForecastsModel } from "./DailyForecastsModel";
import { SearchWeatherCityModel } from "./SearchWeatherCityModel";

interface ADD_FAVORITE {
  type: AllActionType.ADD_FAVORITE;
  payload: WeatherPerCityModel;
}

interface REMOVE_FAVORITE {
  type: AllActionType.REMOVE_FAVORITE;
  payload: WeatherPerCityModel;
}

interface SEARCH_RESULTS {
  type: AllActionType.SEARCH_RESULTS;
  payload: SearchWeatherCityModel[];
}

interface CITY_WEATHER {
  type: AllActionType.CITY_WEATHER;
  payload: WeatherPerCityModel;
}

interface CLEAR_CITY_WEATHER {
  type: AllActionType.CLEAR_CITY_WEATHER;
}

interface GET_DAILY_FORECASTS {
  type: AllActionType.GET_DAILY_FORECASTS;
  payload: DailyForecastsModel[];
}

interface MSG {
  type: AllActionType.MSG;
  payload: string;
}

export type Actions =
  | ADD_FAVORITE
  | REMOVE_FAVORITE
  | SEARCH_RESULTS
  | CITY_WEATHER
  | GET_DAILY_FORECASTS
  | MSG
  | CLEAR_CITY_WEATHER;
