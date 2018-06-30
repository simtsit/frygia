import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechartsimple',
  templateUrl: './piechartsimple.component.html',
  styleUrls: ['./piechartsimple.component.css']
})

export class PiechartsimpleComponent implements OnInit {


  constructor() {

   }

  ngOnInit() {
  	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

	var data = google.visualization.arrayToDataTable([
	  ['Task', 'Hours per Day'],
	  ['Work',     11],
	  ['Eat',      2],
	  ['Commute',  2],
	  ['Watch TV', 2],
	  ['Sleep',    7]
	]);

	var options = {
		title: 'My Daily Activities',
		colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
		is3D: true,
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart'));

	chart.draw(data, options);
	}
  }

}
