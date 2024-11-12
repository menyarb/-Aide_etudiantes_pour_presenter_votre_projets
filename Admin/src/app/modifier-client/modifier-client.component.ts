import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'app/model/Client.model';
import { Chaja3niService } from 'app/services/chaja3ni.service';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.scss']
})
export class ModifierClientComponent implements OnInit {
   
  currentClient = new Client()
  avatarImage: any;
  selectedFile: any;

  constructor(private _Chaja3niService :Chaja3niService,
    private activatedRoute :ActivatedRoute, 
    private router:Router) { }
    updateClient() {
 
      if(this.selectedFile){ // ken esayed i5tar taswira jdyda 
        const uploadData = new FormData();
        uploadData.append('file', this.selectedFile, this.selectedFile.name)
        this._Chaja3niService.upload(uploadData).subscribe((data) => {
          if(data.fileUrl){
            this.  currentClient.image=data.fileUrl
      this._Chaja3niService.updateClient(this.  currentClient).subscribe(client => {
        this.router.navigate(['liste_client']).then(() => {
          window.location.reload()
        })
      })
          }
       })
      }
      else{
        this._Chaja3niService.updateClient(this. currentClient).subscribe(client => {
          this.router.navigate(['liste_client']).then(() => {
            window.location.reload()
          })
        })
      }

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
    ngOnInit(): void {
    
      this._Chaja3niService.getClientById(this.activatedRoute.snapshot.params['idClient']).subscribe(client => {
        this.currentClient= client
        this.avatarImage = client.image
      })
    }

}