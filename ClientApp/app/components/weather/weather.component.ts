import { Component, OnInit } from "@angular/core";
import { IWeatherForecast, WeatherService } from "../../services/weather.service";

@Component({
    selector: "weather",
    templateUrl: "./weather.component.html"
})
export class WeatherComponent implements OnInit {
    forecasts: IWeatherForecast[] = [];

    constructor(public weatherService: WeatherService) { }

    ngOnInit(): void {
        this.weatherService.getForecasts().subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
}