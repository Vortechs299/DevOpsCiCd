import { Component } from '@angular/core';
import { VoetbalService } from '../voetbal.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  id = "";

  constructor(private _voetbalService: VoetbalService) { }

  Submit(){
    if(this.id != "" && this.id != "0"){
      this._voetbalService.VoetbalDELETE(this.id)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      );
    }
  }

}
