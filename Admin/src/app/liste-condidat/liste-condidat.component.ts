import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { CoreConfigService } from '@core/services/config.service';
import { Chaja3niService } from 'app/services/chaja3ni.service';
import { Condidat } from 'app/model/Condidat.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-condidat',
  templateUrl: './liste-condidat.component.html',
  styleUrls: ['./liste-condidat.component.scss']
})
export class ListeCondidatComponent implements OnInit {
  condidat:Condidat[];
 
 
  constructor(private _Chaja3niService :Chaja3niService , private router: Router) { }


  ngOnInit(): void {
    this.getCondidat();


    this._Chaja3niService.listecondidat().subscribe(
      condidat => this.condidat= condidat
     );
  }
  updateCondidat(idCondidat:number){
    this.router.navigate(['/modifier_condidat',idCondidat])
    }
      //delete
 deletecondidat(idCondidat:number){
 
  this._Chaja3niService.deletecondidat(idCondidat)
  
      .subscribe(Condidat => {  
        
this.getCondidat();

      })
}
private getCondidat(){
  this._Chaja3niService.listecondidat().subscribe(condidat => {
    this.condidat = condidat;
  });
}
}
