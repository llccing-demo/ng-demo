import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ctrl = new FormControl(10);

  updateSlider($event) {
    this.ctrl.setValue($event.currentTarget.value, {
      emitViewToModelChange: true,
    });
  }
}
