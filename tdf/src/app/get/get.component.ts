import { Component, OnInit } from '@angular/core';
import { VoetbalService } from '../voetbal.service';
import { Player } from '../player';
import { GPlayer } from '../getplayer';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {

  constructor(private _voetbalService: VoetbalService) {

  }

  items: Player[];
  p: GPlayer;

  param;
  paramvalue;
  params = ['firstname','lastname','team','page','sort'];
  id = "";

  ngOnInit(){
    this._voetbalService.GETplayers()
      .subscribe(data => {this.items = data;});
  }

  OnParams(){
    this._voetbalService.GETplayersByParam(this.param, this.paramvalue)
      .subscribe(data => {this.items = data;});
  }

  GetById(Value: string): void {  
    this._voetbalService.GETplayerById(Value)
      .subscribe(data => {this.p = data;});
  }
}