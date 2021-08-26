import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';

@Component({
selector: 'app-pie-chart',
templateUrl: './pie-chart.component.html',
styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('pieChart') as HTMLCanvasElement;
var pieChart = new Chart(ctx, {
type: 'pie',
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