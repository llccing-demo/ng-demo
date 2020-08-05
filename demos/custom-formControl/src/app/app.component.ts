import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sliderValue: number = 10;

  onSliderValueChange(value) {
    console.log('appComponent get value::', value);
    this.sliderValue = value;
  }
}
