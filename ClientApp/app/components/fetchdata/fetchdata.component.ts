import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { IWeatherForecast, WeatherService } from "../../services/weather.service";

@Component({
    selector: "fetchdata",
    templateUrl: "./fetchdata.component.html"
})
export class FetchDataComponent implements OnInit {
    public forecasts: IWeatherForecast[];

    constructor(public http: Http, public weatherService: WeatherService) { }

    ngOnInit(): void {
        this.weatherService.getForecasts().subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
}