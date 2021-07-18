import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherForecast} from "./api/models/weather-forecast";
import {WeatherForecastService} from "./api/services/weather-forecast.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateSPA';
  public weatherForecasts : WeatherForecast[] = [];

  constructor(private weatherService: WeatherForecastService)
  {
    weatherService.weatherForecastGet$Json().subscribe(result =>{
      this.weatherForecasts = result;
    })
  }
}
