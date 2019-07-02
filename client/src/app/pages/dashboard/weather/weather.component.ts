import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private appId: string;
  private appCode: string;
  public weather: any;
  public weatherAlert: any;

  public constructor(private http: HttpClient) {
    this.appId = 'TU5fZFNa82qSvx4SnPd7';
    this.appCode = 'VbeYRMvpLHhlUb56aOJWng';
    this.weather = [];
    this.weatherAlert = [];
   }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.getWeather(position.coords);
      });
    }else{
      console.log('The browser does not support geolocation...');
    }
  }


  public getWeather(coordinates: any) {
    //HERE Weather API
// tslint:disable-next-line: max-line-length
    this.http.jsonp('https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=' + coordinates.latitude + '&longitude=' + coordinates.longitude + '&app_id=' + this.appId + '&app_code=' + this.appCode, 'jsonpCallback')
        .pipe(map(result => (<any>result).dailyForecasts.forecastLocation))
        .subscribe(result => {
            this.weather = result.forecast;
        }, error => {
            console.error(error);
        });
}

}
