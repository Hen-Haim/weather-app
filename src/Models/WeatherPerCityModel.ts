export class WeatherPerCityModel {
    public Key: number;
    public LocalObservationDateTime: string;
    public WeatherText: string;
    public Temperature: TemperatureModel;
    public LocalizedName: string;
}

export class TemperatureModel {
    "Metric": {
        "Value": number,
        "Unit": string,
    };
    "Imperial": {
        "Value": number,
        "Unit": string,
    }
}

