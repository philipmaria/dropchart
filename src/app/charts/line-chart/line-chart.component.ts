import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
selector: 'app-line-chart',
templateUrl: './line-chart.component.html',
styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('lineChart') as HTMLCanvasElement;
var lineChart = new Chart(ctx, {
type: 'line',
data: {
labels: ['Pink', 'Grey', 'Yellow', 'Olive', 'Purple', 'Black'],
datasets: [{
label: 'Marks',
data: [5, 3, 14, 12, 8, 9],
backgroundColor: [
'olive',
],
borderColor: [
'olive',
],
borderWidth: 4,
fill: false
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