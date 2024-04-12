import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CanvasJSAngularChartsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'site';
  chartOptions = {
    title: {
      text: "UMIDADE ATUAL"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Apple", y: 10 },
        { label: "Orange", y: 15 },
        { label: "Banana", y: 25 },
        { label: "Mango", y: 30 },
        { label: "Grape", y: 28 }
      ]
    }]
  };
}
