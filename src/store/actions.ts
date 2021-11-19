import axios from "axios";
import { SearchWeatherCityModel } from "../Models/SearchWeatherCityModel";
import { WeatherPerCityModel } from "../Models/WeatherPerCityModel";
import { AllActionType } from "../Models/ActionsType";
import { Dispatch } from "redux";
import { RootStateOrAny } from "react-redux";

const APIKey = "A2HMcbeXzyhe5PUHsiqBQbovW1PyVitw";  

export const getCurrentPosition = () => async (dispatch: Dispatch) => {
  const successPos = async (position: any) => {
    let lat: number = position.coords.latitude;
    let lon: number = position.coords.longitude;

    const response = await axios.get<any>(
      `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${APIKey}&q=${lat}%2C${lon}&toplevel=true`
    );

    let cityDetails: SearchWeatherCityModel;

    cityDetails = {
      Key: response.data.Key,
      LocalizedName: "Your Current Location: " + response.data.LocalizedName,
    };

    dispatch({
      type: AllActionType.GEO_LOCATION,
      payload: [cityDetails],
    });
  };

  const errorPos = (error: any) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successPos, errorPos);
};

export const search = (state: RootStateOrAny) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<SearchWeatherCityModel[]>(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKey}&q=${state}`
    );

    dispatch({
      type: AllActionType.SEARCH_RESULTS,
      payload: response.data,
    });

  } catch (error: any) {
    dispatch({
      type: AllActionType.MSG,
      payload: error.message,
    });
  }
};

export const getWeatherPerCity = (city: SearchWeatherCityModel) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<WeatherPerCityModel[]>(
      `https://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${APIKey}`
    );
    const results: WeatherPerCityModel = response.data[0];
    let cityDetails: WeatherPerCityModel;
    cityDetails = {
      Key: city.Key,
      LocalObservationDateTime: results.LocalObservationDateTime,
      WeatherText: results.WeatherText,
      Temperature: results.Temperature,
      LocalizedName: city.LocalizedName,
    };

    dispatch({
      type: AllActionType.CITY_WEATHER,
      payload: [cityDetails],
    });

  } catch (error: any) {
    dispatch({
      type: AllActionType.MSG,
      payload: error.message,
    });
  }
};

export const getFiveDaysWeather = (cityKey: number, cityName: string) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<any>(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${APIKey}&metric=true&detailes=true"`
    );
    for (let i = 0; i < response.data.DailyForecasts.length; i++) {
      response.data.DailyForecasts[i].localizedName = cityName;
    }
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

export const removeFromFavorites = (city: WeatherPerCityModel, favorites: WeatherPerCityModel[]) => (dispatch: Dispatch) => {
  let newFavorite: WeatherPerCityModel[] = favorites?.filter((favorite: WeatherPerCityModel) => favorite.Key !== city.Key )
  dispatch({
    type: AllActionType.REMOVE_FAVORITE,
    payload: newFavorite,
  });
};

export const sendMessage = (message: string) => (dispatch: Dispatch) => {
  dispatch({
    type: AllActionType.MSG,
    payload: message,
  });
};

