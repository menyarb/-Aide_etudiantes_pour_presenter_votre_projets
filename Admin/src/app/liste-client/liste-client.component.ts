import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { CoreConfigService } from '@core/services/config.service';
import { Client } from 'app/model/Client.model';
import { Chaja3niService } from 'app/services/chaja3ni.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListeClientComponent implements OnInit {

  listeclient:Client[];
 
 
  constructor(private _Chaja3niService :Chaja3niService, private router: Router  ) { }


  ngOnInit(): void {


  this._Chaja3niService.listeclient().subscribe(
    client => this.listeclient = client
  );
  }
    
  updateClient(id:number){
    this.router.navigate(['/modifier_client',id])
    }
      //delete
 deleteclient(idClient:number){
 
  this._Chaja3niService.deleteclient(idClient)
  
      .subscribe(client => {  
        
this.getClient();

      })
}
private getClient(){
  this._Chaja3niService.listeclient().subscribe(client => {
    this.listeclient = client;
  });
}
}
