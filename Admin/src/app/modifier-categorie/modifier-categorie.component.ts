import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { ModifierCategorieService } from './modifier-categorie.service';
import { Categorie } from 'app/model/Categorie.model';
import { Chaja3niService } from 'app/services/chaja3ni.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.scss']
})
export class ModifierCategorieComponent implements OnInit {

  public contentHeader: object;
  selectedFile: File;
  
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
 
   categorie = new Categorie()
   constructor( private _Chaja3niService :Chaja3niService,
      private activatedRoute :ActivatedRoute, 
      private router:Router) { }
      updateCategorie() {
     
        if(this.selectedFile){ // ken esayed i5tar taswira jdyda 
          const uploadData = new FormData();
          uploadData.append('file', this.selectedFile, this.selectedFile.name)
          this._Chaja3niService.upload(uploadData).subscribe((data) => {
            if(data.fileUrl){
              this.categorie.img_categorie=data.fileUrl
        this._Chaja3niService.updateCategorie(this.categorie).subscribe(Categorie => {
          this.router.navigate(['liste_categorie']).then(() => {
            window.location.reload()
          })
        })
            }
         })
        }
        else{
          this._Chaja3niService.updateCategorie(this.categorie).subscribe(Categorie => {
            this.router.navigate(['liste_categorie']).then(() => {
              window.location.reload()
            })
          })
        }

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
      this.selectedFile = event.target.files[0];
    }
  }
 
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
 
  /**
   * On init
   */
  ngOnInit() {

    this._Chaja3niService.getCategorieById(this.activatedRoute.snapshot.params['idCategorie']).subscribe(categorie => {
      this.categorie = categorie
  this.avatarImage = categorie.img_categorie
    })
   }}

