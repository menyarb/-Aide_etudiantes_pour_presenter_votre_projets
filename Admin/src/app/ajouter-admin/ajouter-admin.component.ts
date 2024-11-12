import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AjouterCategorieService } from 'app/ajouter-categorie/ajouter-categorie.service';
import { Admin } from 'app/model/Admin.model';
import { Chaja3niService } from 'app/services/chaja3ni.service';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.scss']
})
export class AjouterAdminComponent implements OnInit {

  public contentHeader: object;
  //1
  selectedFile: File;
  public admin:Admin=new Admin;
  private _unsubscribeAll: Subject<any>;
  avatarImage: any;
  constructor(private _ajouterCategorieService: AjouterCategorieService,
    private service :Chaja3niService, 
    private router : Router) {
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
   //3
     onSubmit(){
      const uploadData = new FormData();
      uploadData.append('file', this.selectedFile, this.selectedFile.name)
      this.service.uploadAdmin(uploadData).subscribe((data) => {
         if(data.fileUrl){
           this.admin.image=data.fileUrl
            this.service.addNewAdmin(this.admin).subscribe(    admin => {
              this.router.navigate(['liste_admin']).then(()=>{
              window.location.reload()
            })
          })
         }
      })
       
     }
  
  ngOnInit(): void {


}

}
