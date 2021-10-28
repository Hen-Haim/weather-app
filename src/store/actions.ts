import axios from "axios";
import { DailyForecastsModel } from "../Models/DailyForecastsModel";
import { SearchWeatherCityModel } from "../Models/SearchWeatherCityModel";
import { WeatherPerCityModel } from "../Models/WeatherPerCityModel";
import { AllActionType } from "../Models/ActionsType";
import { Dispatch } from "redux";
import { RootStateOrAny } from "react-redux";

const APIKey = "A2HMcbeXzyhe5PUHsiqBQbovW1PyVitw"; 
// const APIKey = '8j7t0np4nHcDaTHN6tXFt4eJc8AWJ2ZT'
// const APIKey = 'HeIBFKnJmUovajKW8vDI6Ja7F1c80SiR'


export const search = (state: RootStateOrAny) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<SearchWeatherCityModel[]>(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKey}&q=${state}`
    );
    let searchResults = [];
    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i]) {
        searchResults.push(response.data[i]);
      }
    }
    dispatch({
      type: AllActionType.SEARCH_RESULTS,
      payload: searchResults,
    });
  } catch (error: any) {
    dispatch({
      type: AllActionType.MSG,
      payload: error.message,
    });
  }
};

export const clearWeatherPerCity = () =>  async (dispatch: Dispatch) => {
   console.log("here???")
    try {
      dispatch({
        type: AllActionType.CLEAR_CITY_WEATHER,
      });
    } catch (error: any) {
      dispatch({
        type: AllActionType.MSG,
        payload: error.message,
      });
    }
  };

export const getWeatherPerCity = ( city: WeatherPerCityModel & DailyForecastsModel ) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<WeatherPerCityModel[]>(
        `https://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${APIKey}`
      );
      const results = response.data[0];
      const cityDetails = {
        key: city.Key,
        country: city.Country,
        LocalObservationDateTime: results.LocalObservationDateTime,
        WeatherText: results.WeatherText,
        Temperature: results.Temperature,
        LocalizedName: city.LocalizedName,
      };
      dispatch({
        type: AllActionType.CITY_WEATHER,
        payload: cityDetails,
      });
    } catch (error: any) {
      dispatch({
        type: AllActionType.MSG,
        payload: error.message,
      });
    }
  };

export const getFiveDaysWeather = (cityKey: number) => async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<any>(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${APIKey}&metric=true&detailes=true"`
      );
      dispatch({
        type: AllActionType.GET_DAILY_FORECASTS,
        payload: response.data.DailyForecasts,
      });
    } catch (error: any) {
      dispatch({
        type: AllActionType.MSG,
        payload: error.message,
      });
    }
  };

export const addToFavorites = (city: WeatherPerCityModel) => (dispatch: Dispatch) => {
    dispatch({
      type: AllActionType.ADD_FAVORITE,
      payload: city,
    });
  };

export const removeFromFavorites = (city: WeatherPerCityModel) => (dispatch: Dispatch) => {
    dispatch({
      type: AllActionType.REMOVE_FAVORITE,
      payload: city,
    });
  };

export const sendMessage = (message: string) => (dispatch: Dispatch) => {
  dispatch({
    type: AllActionType.MSG,
    payload: message,
  });
};