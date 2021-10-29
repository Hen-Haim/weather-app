export class DailyForecastsModel {
  public Date?: string;
  public Temperature?: TemperatureModel;
  public localizedName?: string;
}

export class TemperatureModel {
  Minimum: {
    "Value": number,
    "Unit": string,
  };
  Maximum: {
    "Value": number,
    "Unit": string,
  }
}