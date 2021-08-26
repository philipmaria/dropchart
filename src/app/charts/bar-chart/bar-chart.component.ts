import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Router } from '@angular/router';

@Component({
selector: 'app-bar-chart',
templateUrl: './bar-chart.component.html',
styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('barChart') as HTMLCanvasElement;
var barChart = new Chart(ctx, {
type: 'bar',
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