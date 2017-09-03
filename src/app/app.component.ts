import { Component } from '@angular/core';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { Card } from './models/card'

const WEATHERCARDS: Card[] = [
  { title: "11", content: 'Mr. Nice' },
  { title: "12", content: 'Narco' },
  { title: "13", content: 'Bombasto' },
  { title: "14", content: 'Celeritas' },
  { title: "15", content: 'Magneta' },
  { title: "16", content: 'RubberMan' },
  { title: "17", content: 'Dynama' },
  { title: "18", content: 'Dr IQ' },
  { title: "19", content: 'Magma' },
  { title: "20", content: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  cards = WEATHERCARDS;
}
