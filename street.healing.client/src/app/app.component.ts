import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getForecasts();
  }

  btnSignUpClick() {

    this.router.navigateByUrl('userSignup');
            
  }

  btnLoginClick() {

    this.router.navigateByUrl('userLogin');

  }


  getForecasts() {
    this.http.get<WeatherForecast[]>('weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'street.healing.client';
}
