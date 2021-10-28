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
}

let newState: StateType = {
  weatherPerCity: [
    {
      "Key":1,
    "LocalObservationDateTime": "2021-10-26T11:51:00+03:00",
    "WeatherText": "Clear",
    "Temperature": {
      "Metric": {
      "Value": 27.2,
      "Unit": "C",
      },
    }},
    {
      "Key":2,
      "LocalObservationDateTime": "2021-10-25T21:51:00+03:00",
      "WeatherText": "Mostly clear",
      "Temperature": {
      "Metric": {
      "Value": 23.2,
      "Unit": "C",
      }
    }},
    ],
  searchResults: [],
  dailyForecasts: [],
  favorites: [],
  msg: "",
};

const reducer = (state: StateType = newState, action: Actions): StateType => {
  switch (action.type) {
    case AllActionType.GET_DAILY_FORECASTS:
      return {
        ...state,
        dailyForecasts: [...action.payload],
        msg: '',
      };
    case AllActionType.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        msg: '',
      };
    case AllActionType.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites?.filter( (favorite) => favorite !== action.payload ),
        msg: '',
      };
    case AllActionType.SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
        msg: '',
      };
    case AllActionType.CITY_WEATHER:
      return {
        ...state,
        weatherPerCity: [...state.weatherPerCity, action.payload],
        msg: '',
      };
    case AllActionType.CLEAR_CITY_WEATHER:
      return {
        ...state,
        weatherPerCity: [],
        msg: '',
      };
    case AllActionType.MSG:
      return {
        ...state,
        msg: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
