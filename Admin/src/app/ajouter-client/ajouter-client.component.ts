import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Client} from 'app/model/Client.model';
import { Chaja3niService } from 'app/services/chaja3ni.service';
@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.scss']
})
export class AjouterClientComponent implements OnInit {


public client:Client=new Client;
  avatarImage: any;
  selectedFile: any;

  constructor(private service :Chaja3niService , private router : Router) { }
  addNewClient() {
    this.service.addNewClient(this.client).subscribe(
      client => {
      this.router.navigate(['liste_client']).then(()=>{
        window.location.reload()
      })
    })
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
      this.service.uploadClient(uploadData).subscribe((data) => {
         if(data.fileUrl){
           this.client.image=data.fileUrl
            this.service.addNewClient(this.client).subscribe(    client => {
              this.router.navigate(['liste_client']).then(()=>{
              window.location.reload()
            })
          })
         }
      })
       
     }
  
  ngOnInit(): void {


}

}
