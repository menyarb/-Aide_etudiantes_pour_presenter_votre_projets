import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Condidat } from 'app/model/Condidat.model';
import { Chaja3niService } from 'app/services/chaja3ni.service';

@Component({
  selector: 'app-modifier-condidat',
  templateUrl: './modifier-condidat.component.html',
  styleUrls: ['./modifier-condidat.component.scss']
})
export class ModifierCondidatComponent implements OnInit {
currentCondidat=new Condidat()
  avatarImage: any;
  selectedFile: any;

  constructor( private _Chaja3niService :Chaja3niService,
    private activatedRoute :ActivatedRoute, 
    private router:Router) { }

    updateCondidat() {
      if(this.selectedFile){ // ken esayed i5tar taswira jdyda 
        const uploadData = new FormData();
        uploadData.append('file', this.selectedFile, this.selectedFile.name)
        this._Chaja3niService.upload(uploadData).subscribe((data) => {
          if(data.fileUrl){
            this.  currentCondidat.image=data.fileUrl
      this._Chaja3niService.updateCondidat(this. currentCondidat).subscribe(condidat => {
        this.router.navigate(['liste_condidat']).then(() => {
          window.location.reload()
        })
      })
          }
       })
      }
      else{
        this._Chaja3niService.updateCondidat(this. currentCondidat).subscribe(Condidat => {
          this.router.navigate(['liste_condidat']).then(() => {
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
    
    this._Chaja3niService.getCondidatById(this.activatedRoute.snapshot.params['idCond']).subscribe(condidat => {
      this.currentCondidat = condidat
      this.avatarImage = condidat.image
    })

}

}
