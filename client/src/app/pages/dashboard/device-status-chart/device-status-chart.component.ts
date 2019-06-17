import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../assets/canvasjs.min';

@Component({
  selector: 'client-device-status-chart',
  templateUrl: './device-status-chart.component.html',
  styleUrls: ['./device-status-chart.component.scss']
})
export class DeviceStatusChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Device status"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 450, name: "Online" }
        ]
      }]
    });

    chart.render();
  }

}
