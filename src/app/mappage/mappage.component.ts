import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mappage',
  templateUrl: './mappage.component.html',
  styleUrls: ['./mappage.component.css']
})
export class MappageComponent implements OnInit {

  pageData = {
  		"h1title": "Global Map"
  	};

  constructor() { }

  ngOnInit() {
  }

}
