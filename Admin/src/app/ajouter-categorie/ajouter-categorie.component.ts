import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { AjouterCategorieService } from './ajouter-categorie.service';
import { Categorie } from 'app/model/Categorie.model';
import { Chaja3niService } from 'app/services/chaja3ni.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.scss']
})
export class AjouterCategorieComponent implements OnInit {

  public contentHeader: object;
  //1
  selectedFile: File;

  public categorie:Categorie=new Categorie;
  // public
 
  public data: any;
  public birthDateOptions: FlatpickrOptions = {
    altInput: true
  };
  public passwordTextTypeOld = false;
  public passwordTextTypeNew = false;
  public passwordTextTypeRetype = false;
  public avatarImage: string;
 
  // private
  private _unsubscribeAll: Subject<any>;
 
  /**
   * Constructor
   *
   * @param {AccountSettingsService} _accountSettingsService
   */
  constructor(private _ajouterCategorieService: AjouterCategorieService,
     private service :Chaja3niService, 
     private router : Router) {
    this._unsubscribeAll = new Subject();
  }
 
  // Public Methods
  // -----------------------------------------------------------------------------------------------------
 
  /**
   * Toggle Password Text Type Old
   */
  togglePasswordTextTypeOld() {
    this.passwordTextTypeOld = !this.passwordTextTypeOld;
  }
 
  /**
   * Toggle Password Text Type New
   */
  togglePasswordTextTypeNew() {
    this.passwordTextTypeNew = !this.passwordTextTypeNew;
  }
 
  /**
   * Toggle Password Text Type Retype
   */
  togglePasswordTextTypeRetype() {
    this.passwordTextTypeRetype = !this.passwordTextTypeRetype;
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
    this.service.upload(uploadData).subscribe((data) => {
       if(data.fileUrl){
         this.categorie.img_categorie=data.fileUrl
          this.service.addNewCategorie(this.categorie).subscribe(    categorie => {
            this.router.navigate(['liste_categorie']).then(()=>{
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
    this._ajouterCategorieService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
      this.avatarImage = this.data.accountSetting.general.avatar;
    });
 
   }}
