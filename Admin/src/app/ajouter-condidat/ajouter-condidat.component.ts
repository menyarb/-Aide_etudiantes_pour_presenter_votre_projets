import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AjouterCategorieService } from 'app/ajouter-categorie/ajouter-categorie.service';
import { Condidat } from 'app/model/Condidat.model';
import { Chaja3niService } from 'app/services/chaja3ni.service';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-ajouter-conidat',
  templateUrl: './ajouter-condidat.component.html',
  styleUrls: ['./ajouter-condidat.component.scss']
})
export class AjouterCondidatComponent implements OnInit {

  public contentHeader: object;
  //1
  selectedFile: File;
  public condidat:Condidat=new Condidat;
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
      this.service.uploadCondidat(uploadData).subscribe((data) => {
         if(data.fileUrl){
           this.condidat.image=data.fileUrl
            this.service.addNewCondidat(this.condidat).subscribe(    condidat=> {
              this.router.navigate(['liste_condidat']).then(()=>{
              window.location.reload()
            })
          })
         }
      })
       
     }
  
  ngOnInit(): void {


}

}
