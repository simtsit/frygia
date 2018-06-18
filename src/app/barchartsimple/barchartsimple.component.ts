import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchartsimple',
  templateUrl: './barchartsimple.component.html',
  styleUrls: ['./barchartsimple.component.css']
})
export class BarchartsimpleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
	google.charts.load('current', {packages: ['corechart', 'bar']});
	google.charts.setOnLoadCallback(drawBasic);

	function drawBasic() {

	      var data = google.visualization.arrayToDataTable([
	        ['City', '2010 Population',],
	        ['New York City, NY', 8175000],
	        ['Los Angeles, CA', 3792000],
	        ['Chicago, IL', 2695000],
	        ['Houston, TX', 2099000],
	        ['Philadelphia, PA', 1526000]
	      ]);

	      var options = {
	        title: 'Population of Largest U.S. Cities',
	        chartArea: {width: '50%'},
	        hAxis: {
	          title: 'Total Population',
	          minValue: 0
	        },
	        vAxis: {
	          title: 'City'
	        }
	      };

	      var chart = new google.visualization.BarChart(document.getElementById('barchart'));

	      chart.draw(data, options);
	    }
  }

}
