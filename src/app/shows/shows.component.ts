import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  flyers: any;

  constructor() { 
    this.flyers = [{title: "Return of Ska", date: "3/23/17", url: "http://los2x4s.weebly.com/uploads/8/0/1/5/80156922/fb-img-1486869835996_orig.jpg"}, {title: "The Great 8 Presents", date: "1/23/17", url: "http://los2x4s.weebly.com/uploads/8/0/1/5/80156922/fb-img-1484182580139_orig.jpg"}]
  }

  ngOnInit() {
  }

}
