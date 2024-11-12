import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';

import { ModifierOffreService } from 'app/modifier-offre/modifier-offre.service';
import { Chaja3niService } from 'app/services/chaja3ni.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'app/model/Offre.model';

@Component({
  selector: 'app-modifier-offre',
  templateUrl: './modifier-offre.component.html',
  styleUrls: ['./modifier-offre.component.scss']
})
export class ModifierOffreComponent implements OnInit {

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
   offre = new Offre()
  constructor(private _modifierOffreService: ModifierOffreService,
    private _Chaja3niService :Chaja3niService,
      private activatedRoute :ActivatedRoute, 
      private router:Router) {}
      updateOffre() {
     
        if(this.selectedFile){ // ken esayed i5tar taswira jdyda 
          const uploadData = new FormData();
          uploadData.append('file', this.selectedFile, this.selectedFile.name)
          this._Chaja3niService.upload(uploadData).subscribe((data) => {
            if(data.fileUrl){
              this.offre.image=data.fileUrl
        this._Chaja3niService.updateOffre(this.offre).subscribe(Offre => {
          this.router.navigate(['liste_offre']).then(() => {
            window.location.reload()
          })
        })
            }
         })
        }
        else{
          this._Chaja3niService.updateOffre(this.offre).subscribe(Categorie => {
            this.router.navigate(['liste_offre']).then(() => {
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
  
    this._Chaja3niService.getOffreById(this.activatedRoute.snapshot.params['idOffre']).subscribe(offre => {
      this.offre = offre
  this.avatarImage = offre.image
    })
 
   }}
