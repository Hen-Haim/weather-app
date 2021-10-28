export class SearchWeatherCityModel {
    public Key: string;
    public LocalizedName: string;
    public Country: CountryModel
}

export class CountryModel {
    public ID: string;
    public LocalizedName: string;
}
