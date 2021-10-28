export class WeatherPerCityModel {
    public Key?: number;
    public Country?: CountryModel;
    public LocalObservationDateTime?: string;
    public WeatherText?: string;
    public Temperature?: TemperatureModel;
    public LocalizedName?: string;
}

export class TemperatureModel {
    "Metric": {
        "Value": number,
        "Unit": string,
    }
}


export class CountryModel {
    public ID: string;
    public LocalizedName: string;
}
