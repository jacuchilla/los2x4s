import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.requestWidget();
  }

  ngOnDestroy() {
    this.destroyWidget();
  }

  requestWidget() {
    var head = document.getElementsByTagName("body")[0];
    console.log('heres the element ', head)

    var script = document.createElement("script");
    script.src = "https://widget.bandsintown.com/main.min.js";
    script.id = "widgetReq"; 
    head.appendChild(script);
  }

  destroyWidget() {
    console.log('destroyed bro ')
    document.getElementById('widgetReq').remove();
  }

}
