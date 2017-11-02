import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";


@Injectable()
export class WeatherService {
    constructor(public http: Http) { }

    getForecasts(): Observable<IWeatherForecast[]> {
        return this.http.get("api/WeatherData/Forecasts").map((rsp) => rsp.json());
    }
}

export interface IWeatherForecast {
    date: Date;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}