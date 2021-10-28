export class DailyForecastsModel {
  public Date?: string;
  public Temperature?: TemperatureModel;
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