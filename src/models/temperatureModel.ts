export interface TemperatureApiResponse {
  message: string;
  shipments: string[];
  date: string[];
  city: string[];
  loggerMinTemp: number[];
  loggerMaxTemp: number[];
  loggerAvgTemp: number[];
  temperature_2m_min: number[];
  temperature_2m_max: number[];
  temperature_2m_mean: number[];
}

export interface TemperatureChartModel {
  date: string;
  loggerTemp: number;
  ambientTemp: number;
}
