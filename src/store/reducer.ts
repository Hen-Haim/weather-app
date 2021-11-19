import { DailyForecastsModel } from "../Models/DailyForecastsModel";
import { SearchWeatherCityModel } from "../Models/SearchWeatherCityModel";
import { WeatherPerCityModel } from "../Models/WeatherPerCityModel";
import { Actions } from "../Models/Actions";
import { AllActionType } from "../Models/ActionsType";

export interface StateType {
  dailyForecasts: DailyForecastsModel[];
  searchResults: SearchWeatherCityModel[];
  weatherPerCity: WeatherPerCityModel[];
  favorites: WeatherPerCityModel[];
  msg: string;
  locationResult: SearchWeatherCityModel[];
}

let newState: StateType = {
  weatherPerCity: [],
  searchResults: [],
  dailyForecasts: [],
  favorites: [],
  msg: "",
  locationResult: [],
};

const reducer = (state: StateType = newState, action: Actions): StateType => {
  switch (action.type) {
    case AllActionType.GET_DAILY_FORECASTS:
      return {
        ...state,
        dailyForecasts: [...action.payload],
        msg: "",
      };
    case AllActionType.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        msg: "",
      };
    case AllActionType.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
        msg: "",
      };
    case AllActionType.SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
        msg: "",
      };
    case AllActionType.CITY_WEATHER:
      return {
        ...state,
        weatherPerCity: action.payload,
        msg: "",
      };
    case AllActionType.MSG:
      return {
        ...state,
        msg: action.payload,
      };
    case AllActionType.GEO_LOCATION:
      return {
        ...state,
        locationResult: action.payload,
        msg: "",
      };
    default:
      return state;
  }
};

export default reducer;
