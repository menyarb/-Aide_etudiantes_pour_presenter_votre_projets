import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'app/model/Admin.model';
import { Chaja3niService } from 'app/services/chaja3ni.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.scss']
})
export class ModifierAdminComponent implements OnInit {


  private _unsubscribeAll: Subject<any>;
 currentAdmin = new Admin()
  avatarImage: any;
  selectedFile: any;
  
  constructor( private _Chaja3niService :Chaja3niService,
     private activatedRoute :ActivatedRoute, 
     private router:Router,
     ) { 
      this._unsubscribeAll = new Subject();
     }
 /**
   * Upload Image
   *
   * @param event
   */
  uploadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
 
      reader.onload = (event: any) => {
        this.avatarImage = event.target.result;
      };
 
      reader.readAsDataURL(event.target.files[0]);
      //2
      this.selectedFile = event.target.files[0];
    }
  }
     updateAdmin() {

     
      if(this.selectedFile){ // ken esayed i5tar taswira jdyda 
        const uploadData = new FormData();
        uploadData.append('file', this.selectedFile, this.selectedFile.name)
        this._Chaja3niService.upload(uploadData).subscribe((data) => {
          if(data.fileUrl){
            this. currentAdmin.image=data.fileUrl
      this._Chaja3niService.updateAdmin(this. currentAdmin).subscribe(admin => {
        this.router.navigate(['liste_admin']).then(() => {
          window.location.reload()
        })
      })
          }
       })
      }
      else{
        this._Chaja3niService.updateAdmin(this. currentAdmin).subscribe(admin => {
          this.router.navigate(['liste_admin']).then(() => {
            window.location.reload()
          })
        })
      }

    }

    ngOnInit(): void {
    
      this._Chaja3niService.getAdminById(this.activatedRoute.snapshot.params['id']).subscribe(admin => {
        this.currentAdmin = admin
        this.avatarImage = admin.image
      })
    }
  }

   





