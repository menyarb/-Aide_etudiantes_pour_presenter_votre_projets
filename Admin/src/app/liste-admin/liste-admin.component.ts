import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Chaja3niService } from 'app/services/chaja3ni.service';
import { Router } from '@angular/router';
import { Admin } from 'app/model/Admin.model';
import { ModifierAdminComponent } from 'app/modifier-admin/modifier-admin.component';
@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
 
  encapsulation: ViewEncapsulation.None
})
export class ListeAdminComponent implements OnInit {

  admin:Admin[];

  constructor(private _Chaja3niService :Chaja3niService, private router: Router ) { }


  ngOnInit(): void {

this.getAdmin();

  this._Chaja3niService.listeadmin().subscribe(
   admin => this.admin= admin
  );
}
  
  
  updateAdmin(id:number){
  this.router.navigate(['/modifier_admin',id])
  }

  //delete
 deleteadmin(id:number){
 
    this._Chaja3niService.deleteadmin(id)
    
        .subscribe(admin => {  
          
this.getAdmin();

        })
  }
  private getAdmin(){
    this._Chaja3niService.listeadmin().subscribe(admin => {
      this.admin = admin;
    });
  }
  


}