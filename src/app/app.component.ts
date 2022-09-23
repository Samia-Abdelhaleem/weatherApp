import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weatherData!: WeatherData;
  cityName: string = 'cairo';
  constructor(private WeatherServiceInfo: WeatherService) {}
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  onSubmit(form: NgForm) {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  private getWeatherData(cityName: string) {
    this.WeatherServiceInfo.getWeatherData(cityName).subscribe((res) => {
      this.weatherData = res;
    });
  }
}
