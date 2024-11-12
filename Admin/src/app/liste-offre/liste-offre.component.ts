import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent,  id,  SelectionType } from '@swimlane/ngx-datatable';

import { CoreConfigService } from '@core/services/config.service';


import { Chaja3niService } from 'app/services/chaja3ni.service';
import { Router } from '@angular/router';
import { Offre} from 'app/model/Offre.model';
import { ModifierOffreComponent } from 'app/modifier-offre/modifier-offre.component';
@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
 
  encapsulation: ViewEncapsulation.None
})
export class ListeOffreComponent implements OnInit {

  offre:Offre[];

  constructor(private _Chaja3niService :Chaja3niService, private router: Router ) { }


  ngOnInit(): void {

this.getOffre();

  this._Chaja3niService.listeoffre().subscribe(
   offre => this.offre= offre
  );}
  
  
  updateOffre(id:number){
  this.router.navigate(['/modifier_offre',id])
  }

  //delete
 deleteoffre(id:number){
 
    this._Chaja3niService.deleteoffre(id)
    
        .subscribe(offre => {  
          
this.getOffre();

        })
  }
  private getOffre(){
    this._Chaja3niService.listeoffre().subscribe(offre => {
      this.offre = offre;
    });
  }
  


}