import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
selector: 'app-radar-chart',
templateUrl: './radar-chart.component.html',
styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('radarChart') as HTMLCanvasElement;
var radarChart = new Chart(ctx, {
type: 'radar',
data: {
labels: ['Pink', 'Grey', 'Yellow', 'Olive', 'Purple', 'Black'],
datasets: [{
label: 'Marks',
data: [5, 3, 14, 12, 8, 9],
backgroundColor: [
'brown',
],
borderColor: [
'brown',
],
borderWidth: 1
}]
},
options: {
animation: {
duration: 2000,
easing: 'easeInCubic',
},
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});
}


}