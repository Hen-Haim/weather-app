# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





current condition (city specific info):
[
{
"LocalObservationDateTime": "2021-10-25T21:51:00+03:00",
"EpochTime": 1635187860,
"WeatherText": "Mostly clear",
"WeatherIcon": 34,
"HasPrecipitation": false,
"PrecipitationType": null,
"IsDayTime": false,
"Temperature": {
"Metric": {
"Value": 23.2,
"Unit": "C",
"UnitType": 17
},
"Imperial": {
"Value": 74,
"Unit": "F",
"UnitType": 18
}
},
"MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
}
]

http://dataservice.accuweather.com/currentconditions/v1/{215854}

apikey (required) A2HMcbeXzyhe5PUHsiqBQbovW1PyVitw

language en-us

details false





autocomplete search:

[
{
"Version": 1,
"Key": "215854",
"Type": "City",
"Rank": 31,
"LocalizedName": "Tel Aviv",
"Country": {
"ID": "IL",
"LocalizedName": "Israel"
},
"AdministrativeArea": {
"ID": "TA",
"LocalizedName": "Tel Aviv"
}
}
]

http://dataservice.accuweather.com/locations/v1/cities/autocomplete

apikey (required) A2HMcbeXzyhe5PUHsiqBQbovW1PyVitw

q tel aviv

language en-us

5 Days of Daily Forecasts

{
"Headline": {
"EffectiveDate": "2021-10-26T20:00:00+03:00",
"EffectiveEpochDate": 1635267600,
"Severity": 7,
"Text": "Warm Tuesday night",
"Category": "heat",
"EndDate": "2021-10-27T08:00:00+03:00",
"EndEpochDate": 1635310800,
"MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
},
"DailyForecasts": [
{
"Date": "2021-10-26T07:00:00+03:00",
"EpochDate": 1635220800,
"Temperature": {
"Minimum": {
"Value": 67,
"Unit": "F",
"UnitType": 18
},
"Maximum": {
"Value": 78,
"Unit": "F",
"UnitType": 18
}
},
"Day": {
"Icon": 1,
"IconPhrase": "Sunny",
"HasPrecipitation": false
},
"Night": {
"Icon": 33,
"IconPhrase": "Clear",
"HasPrecipitation": false
},
"Sources": [
"AccuWeather"
],
"MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
},
{
"Date": "2021-10-27T07:00:00+03:00",
"EpochDate": 1635307200,
"Temperature": {
"Minimum": {
"Value": 67,
"Unit": "F",
"UnitType": 18
},
"Maximum": {
"Value": 78,
"Unit": "F",
"UnitType": 18
}
},
"Day": {
"Icon": 1,
"IconPhrase": "Sunny",
"HasPrecipitation": false
},
"Night": {
"Icon": 33,
"IconPhrase": "Clear",
"HasPrecipitation": false
},
"Sources": [
"AccuWeather"
],
"MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
},
{
"Date": "2021-10-28T07:00:00+03:00",
"EpochDate": 1635393600,
"Temperature": {
"Minimum": {
"Value": 67,
"Unit": "F",
"UnitType": 18
},
"Maximum": {
"Value": 79,
"Unit": "F",
"UnitType": 18
}
},
"Day": {
"Icon": 6,
"IconPhrase": "Mostly cloudy",
"HasPrecipitation": false
},
"Night": {
"Icon": 34,
"IconPhrase": "Mostly clear",
"HasPrecipitation": false
},
"Sources": [
"AccuWeather"
],
"MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
},
{
"Date": "2021-10-29T07:00:00+03:00",
"EpochDate": 1635480000,
"Temperature": {
"Minimum": {
"Value": 71,
"Unit": "F",
"UnitType": 18
},
"Maximum": {
"Value": 81,
"Unit": "F",
"UnitType": 18
}
},
"Day": {
"Icon": 3,
"IconPhrase": "Partly sunny",
"HasPrecipitation": false
},
"Night": {
"Icon": 35,
"IconPhrase": "Partly cloudy",
"HasPrecipitation": false
},
"Sources": [
"AccuWeather"
],
"MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
},
{
"Date": "2021-10-30T07:00:00+03:00",
"EpochDate": 1635566400,
"Temperature": {
"Minimum": {
"Value": 72,
"Unit": "F",
"UnitType": 18
},
"Maximum": {
"Value": 81,
"Unit": "F",
"UnitType": 18
}
},
"Day": {
"Icon": 7,
"IconPhrase": "Cloudy",
"HasPrecipitation": false
},
"Night": {
"Icon": 7,
"IconPhrase": "Cloudy",
"HasPrecipitation": false
},
"Sources": [
"AccuWeather"
],
"MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
}
]
}

http://dataservice.accuweather.com/forecasts/v1/daily/5day/{215854}

apikey (required) A2HMcbeXzyhe5PUHsiqBQbovW1PyVitw

language en-us

details false

metric false
