import{Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { CoreConfigService } from '@core/services/config.service';
import { ListeCategorieService } from './liste-categorie.service';
import * as snippet from 'app/liste-admin/liste-admin.snippetcode'; 
import { Categorie } from 'app/model/Categorie.model';
import { Chaja3niService } from 'app/services/chaja3ni.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListeCategorieComponent implements OnInit {

  categorie:Categorie[];
// public
public contentHeader: object;
public pageBasic = 4;
public pageBasicText = 3;
public pageColor = 4;
public pagePosition = 3;
public pageSizes = 3;
public pageAdvanced = 3;
public pageAdvancedLink = 3;
public pageAdvancedEllipses = 7;
public pageAdvancedNoEllipses = 8;

// snippet code variables
public _snippetCodeBasic = snippet.snippetCodeBasic;
public _snippetCodeIconText = snippet.snippetCodeIconText;
public _snippetCodeOnlyIcons = snippet.snippetCodeOnlyIcons;
public _snippetCodeSuccess = snippet.snippetCodeSuccess;
public _snippetCodeDanger = snippet.snippetCodeDanger;
public _snippetCodeInfo = snippet.snippetCodeInfo;
public _snippetCodeWarning = snippet.snippetCodeWarning;
public _snippetCodePositions = snippet.snippetCodePositions;
public _snippetCodeSizes = snippet.snippetCodeSizes;
public _snippetCodeAdvanceDefault = snippet.snippetCodeAdvanceDefault;
public _snippetCodeDefaultlLastFirst = snippet.snippetCodeDefaultlLastFirst;
public _snippetCodeEllipsesRotation = snippet.snippetCodeEllipsesRotation;
public _snippetCodeRotatioNoEllipses = snippet.snippetCodeRotatioNoEllipses;


// public
public data: any;
public selectedOption = 10;
public ColumnMode = ColumnMode;
public selectStatus: any = [
  {name : 'All', value: ''},
  {name : 'Downloaded', value: 'Downloaded'},
  {name : 'Draft', value: 'Draft'},
  {name : 'Paid', value: 'Paid'},
  {name : 'Partial Payment', value: 'Partial Payment'},
  {name : 'Past Due', value: 'Past Due'},
  {name : 'Sent', value: 'Sent'}
  ];

public selectedStatus = [];
public searchValue = ""

// decorator
@ViewChild(DatatableComponent) table: DatatableComponent;

// private
private tempData = [];
private _unsubscribeAll: Subject<any>;
public rows;
public tempFilterData;
public previousStatusFilter = '';

/**
 * Constructor
 *
 * @param {CoreConfigService} _coreConfigService
 * @param {CalendarService} _calendarService

 */
constructor(private _Chaja3niService :Chaja3niService, private router: Router) {
  this._unsubscribeAll = new Subject();
}

// Public Methods
// -----------------------------------------------------------------------------------------------------

/**
 * filterUpdate
 *
 * @param event
 */
filterUpdate(event) {
  // Reset ng-select on search
  this.selectedStatus = this.selectStatus[0];

  const val = event.target.value.toLowerCase();

  // filter our data
  const temp = this.tempData.filter(function (d) {
    return d.client.name.toLowerCase().indexOf(val) !== -1 || !val;
  });

  // update the rows
  this.rows = temp;
  // Whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}

/**
 * Filter By Roles
 *
 * @param event
 */
filterByStatus(event) {
  const filter = event.value;
  this.previousStatusFilter = filter;
  this.tempFilterData = this.filterRows(filter);
  this.rows = this.tempFilterData;
}

/**
 * Filter Rows
 *
 * @param statusFilter
 */
filterRows(statusFilter): any[] {
  // Reset search on select change
  this.searchValue = ''
  
  statusFilter = statusFilter.toLowerCase();

  return this.tempData.filter(row => {
    const isPartialNameMatch = row.invoiceStatus.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
    return isPartialNameMatch;
  });
}

// Lifecycle Hooks
// -----------------------------------------------------------------------------------------------------
/**
 * On init
 */
ngOnInit(): void {
  this.getCategorie();
  this._Chaja3niService.listecategorie().subscribe(
    categorie => this.categorie = categorie
  );}
  
  
  updateCategorie(idCategorie:number){
  this.router.navigate(['/modifier_categorie',idCategorie])
  }
    //delete
 deletecategorie(idCategorie:number){
 
  this._Chaja3niService.deletecategorie(idCategorie)
  
      .subscribe(Categorie => {  
        
this.getCategorie();

      })
}
private getCategorie(){
  this._Chaja3niService.listecategorie().subscribe(categorie => {
    this.categorie = this.categorie;
  });
}

}

