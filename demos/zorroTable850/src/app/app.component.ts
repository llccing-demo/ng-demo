import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listOfData = [];
  dateFormat = 'yyyy/MM/dd';

  @ViewChild('picker') myPicker: any;

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London`,
      });
    }
  }

  ngAfterViewInit(): void {
    // let picker = document.getElementById('pickerId').querySelector('input') 
    // console.log('getElementById', picker.disabled = true)
  }
}

