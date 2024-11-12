import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';


import { Chaja3niService } from 'app/services/chaja3ni.service';
import { Router } from '@angular/router';
import { Offre } from 'app/model/Offre.model';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-ajouter-offre',
  templateUrl: './ajouter-offre.component.html',
  styleUrls: ['./ajouter-offre.component.scss']
})
export class AjouterOffreComponent implements OnInit {
  //1
  selectedFile: File;
  public offre:Offre=new Offre;

  constructor(
    private service :Chaja3niService ,
     private router : Router,
  
    ) { }
 /* addNewOffre() {
    //this.onUpload()
     // this.offre.image =this.selectedFile.name
    this.service.addNewOffre(this.offre).subscribe(
      offre => {
      this.router.navigate(['liste_offre']).then(()=>{
        window.location.reload()
      })
    })
   
  }*/


 public data: any;

 public avatarImage: string;

 // private
 
 private _unsubscribeAll: Subject<any>;
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
  this.service.uploadOffre(uploadData).subscribe(data => {
     if(data.fileUrl){
       this.offre.image=data.fileUrl
        this.service.addNewOffre(this.offre).subscribe( offre => {
         
         // console.log('nn')
          this.router.navigate(['liste_offre']).then(()=>{
          window.location.reload()
        })
      })
     }
  })
   
 }

   
 

 // Lifecycle Hooks
 // -----------------------------------------------------------------------------------------------------

 /**
  * On init
  */
 ngOnInit() {
 


 }
 /*onFileChanged(event ) {
  this.selectedFile = event.target.files[0]
   
}
onUpload() {
  console.log("test")
  // this.http is the injected HttpClient
  const file = new FormData();
  this.offre.image =this.selectedFile.name

  file.append('file', this.selectedFile, this.selectedFile.name);
  this.http.post('http://localhost:9090/api/upload', file, {
    reportProgress: true,
    observe: 'events'
  })
    .subscribe(event => {
      console.log(event); // handle event here
    });
}*/
}