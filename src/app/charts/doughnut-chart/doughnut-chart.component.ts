import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
selector: 'app-doughnut-chart',
templateUrl: './doughnut-chart.component.html',
styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
var doughnutChart = new Chart(ctx, {
type: 'doughnut',
data: {
labels: ['Pink', 'Grey', 'Yellow', 'Olive', 'Purple', 'Black'],
datasets: [{
label: 'Marks',
data: [5, 3, 14, 12, 8, 9],
backgroundColor: [
    'pink',
    'grey',
    'yellow',
    'olive',
    'purple',
    'black'
],
borderColor: [
    'pink',
    'grey',
    'yellow',
    'olive',
    'purple',
    'black'
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