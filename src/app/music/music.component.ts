import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})





export class MusicComponent implements OnInit {


songsList: any;
songsListShow: any;

  constructor() { 
    this.songsList = ["Surfwood", "Carnies", "Horchata", "Mary Jane", "Away It Goes", "Square Peg"];
    this.songsListShow = [true, true, true, false, true, true];
   }

  ngOnInit() {
  }

  songClick(event, i, index) {
    console.log("this the event ", event.target, i.songsList, index, i.songsList[index]);
    // this.songsListShow[index] = false;
    if (this.songsListShow[index]) {
      this.songsListShow[index] = false;
    }
    else {
      this.songsListShow[index] = true;
    }

    // console.log("this the attributes ", event.target.attributes);
    // console.log("this the attributes ", event.target.attributes.id.nodeValue);
    // "showLyrics = showLyrics ? false : true"
  }

}
