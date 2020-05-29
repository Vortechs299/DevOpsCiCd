import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
//import { GPlayer } from '../getplayer';
import { VoetbalService } from '../voetbal.service'

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  id = "";
  Positions = ['Keeper', 'Right Fullback', 'Left Fullback', 'Center Back', ' Defending Midfielder', 'Right Midfielder', 'Central Midfielder', 'Striker', 'Attacking Midfielder', 'Left Midfielder'];
  playerModel = new Player('Courtois','Thibaut',new Date("1992-11-05"),13,'','Belgie');
  //UpdatePlayerModel = new GPlayer(parseInt(this.id), 'Courtois','Thibaut',new Date("1992-11-05"),13,'','Belgie');

  constructor(private _voetbalService: VoetbalService){}
  
  Submit(){
    if(this.id == "" || this.id == "0"){
      this._voetbalService.VoetbalPOST(this.playerModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      );
    }
    else{
      this._voetbalService.VoetbalPUT(this.playerModel, this.id)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      );
      console.log('pannekoek');
    }
  }

  ngOnInit(){

  }

}
