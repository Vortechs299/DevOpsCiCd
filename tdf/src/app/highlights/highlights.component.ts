import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent {

  vidUrl = 'https://www.scorebat.com/video-api/v1/';
  vids;
  location = "https://www.scorebat.com/ararat-vs-urartu-live-stream/";

  constructor(private http: HttpClient) { 
    this.http.get(this.vidUrl).toPromise().then(data => {
      this.vids = data;
      console.log(this.vids);
    });
  }

  GetStats(url){
    this.location = url;
    console.log(url);
    //document.getElementsByClassName('iframe').location.reload();
  }


}