import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CsvModule } from '@ctrl/ngx-csv';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule, NgbProgressbarModule  } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { FileUploadModule } from 'ng2-file-upload';
import { coreConfig } from 'app/app-config';
import { FakeDbService } from '@fake-db/fake-db.service';
import { CoreDirectivesModule } from '@core/directives/directives';
import { ContentHeaderModule } from './layout/components/content-header/content-header.module';
import { ContextMenuModule } from '@ctrl/ngx-rightclick';
import { CorePipesModule } from '@core/pipes/pipes.module';
import { AuthGuard } from 'app/auth/helpers/auth.guards';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { NouisliderModule } from 'ng2-nouislider';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';

import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';


import { ListeClientComponent } from './liste-client/liste-client.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';

import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';
import { ModifierOffreComponent } from './modifier-offre/modifier-offre.component';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';

import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';

import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { ListeOffreService } from './liste-offre/liste-offre.service';

import { ModifierOffreService } from './modifier-offre/modifier-offre.service';
import { HomeComponent } from './main/sample/home.component';
import { AjouterCategorieService } from './ajouter-categorie/ajouter-categorie.service';
import { ModifierCategorieService } from './modifier-categorie/modifier-categorie.service';
import { ListeCategorieService } from './liste-categorie/liste-categorie.service';


import { ChatContentComponent } from 'app/chat/chat-content/chat-content.component';
import { ChatSidebarComponent } from 'app/chat/chat-sidebars/chat-sidebar/chat-sidebar.component';
import { ChatUserSidebarComponent } from 'app/chat/chat-sidebars/chat-user-sidebar/chat-user-sidebar.component';
import { ChatActiveSidebarComponent } from 'app/chat/chat-sidebars/chat-active-sidebar/chat-active-sidebar.component';
import { ChatComponent } from 'app/chat/chat.component';
import { ChatService } from 'app/chat/chat.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ProfilComponent } from './profil/profil.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AccountSettingsService } from './account-settings/account-settings.service';
import { AjouterAdminComponent} from './ajouter-admin/ajouter-admin.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { AjouterCondidatComponent } from './ajouter-condidat/ajouter-condidat.component';
import { ListeCondidatComponent } from './liste-condidat/liste-condidat.component';
import { ModifierCondidatComponent } from './modifier-condidat/modifier-condidat.component';


const appRoutes: Routes = [
  {
    path: 'chat',
    component: ChatComponent,
    resolve: {
      chatData: ChatService
    },
    data: { animation: 'chat' }
  },
  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'ajouter_admin',
    component: AjouterAdminComponent,
    canActivate:[AuthGuard]
   
  },
  {
    path: 'modifier_admin/:id',
    component:ModifierAdminComponent,
    canActivate:[AuthGuard]
   
  },
  {
    path: 'liste_admin',
    component:ListeAdminComponent,
    data: { animation: 'ListeAdminComponent' },
    canActivate:[AuthGuard]
   
  },
{
    path: 'ajouter_client',
    component:AjouterClientComponent,
    canActivate:[AuthGuard]
   
  },
  {  
    path: 'modifier_client/:idClient',
    component:ModifierClientComponent,
    canActivate:[AuthGuard]
   
  },
  {
    path: 'liste_client',
    component:ListeClientComponent,
    data: { animation: 'ListeClientComponent' } 
    ,
    canActivate:[AuthGuard]
  },

  
  {
    path: 'ajouter_categorie',
    component:AjouterCategorieComponent
    ,
  canActivate:[AuthGuard]
  },
  {  
    path: 'modifier_categorie/:idCategorie',
    component:ModifierCategorieComponent,
 canActivate:[AuthGuard]
  },
  {
    path: 'liste_categorie',
    component:ListeCategorieComponent,
  canActivate:[AuthGuard]
  },
  {
    path: 'ajouter_offre',
    component:AjouterOffreComponent,
    canActivate:[AuthGuard]
  },
  {  
    path: 'modifier_offre/:idOffre',
    component:ModifierOffreComponent,
    canActivate:[AuthGuard]
   
  },
  {
    path: 'liste_offre',
    component:ListeOffreComponent,
    canActivate:[AuthGuard]
   
  },
  {
    path: 'ajouter_categorie',
    component:AjouterCategorieComponent,
    canActivate:[AuthGuard]
  
  },
  {  
    path: 'modifier_categorie/:idOffre',
    component:ModifierCategorieComponent,
    canActivate:[AuthGuard]
   
  },
  {
    path: 'liste_categorie',
    component:ListeCategorieComponent,
    canActivate:[AuthGuard]
   
  },
  {
    path: 'liste_contact',
    component:ListeContactComponent,
    canActivate:[AuthGuard]   
  },
  {
    path: 'ajouter_condidat',
    component:AjouterCondidatComponent,
    canActivate:[AuthGuard]
  
  },
  {
    path: 'liste_condidat',
    component:ListeCondidatComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'modifier_condidat/:idCondidat',
    component:ModifierCondidatComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'profil',
    component: AccountSettingsComponent,
    resolve: {
      accountSetting: AccountSettingsService
    },
    data: { animation: 'account-settings' },
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full'
  },


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AjouterAdminComponent,
    AjouterClientComponent,

    AjouterOffreComponent,
    AjouterCategorieComponent,
  ModifierAdminComponent,
  ModifierClientComponent,

  ModifierOffreComponent,
  ModifierCategorieComponent,
  ListeAdminComponent,
  ListeClientComponent,

  ListeOffreComponent,
 ListeCategorieComponent,
  ListeContactComponent,
 
  ChatComponent,
  ChatContentComponent,
  ChatSidebarComponent,
  ChatUserSidebarComponent,
  ChatActiveSidebarComponent,
  ProfilComponent,
  AccountSettingsComponent,
  
  AjouterCondidatComponent,
  ModifierCondidatComponent,
 
  ],
  imports: [
    
    NgxDatatableModule,
    Ng2FlatpickrModule,
    NgbProgressbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    CardSnippetModule,
    FileUploadModule,
    SwiperModule,
    NouisliderModule,
    CsvModule,
    CoreTouchspinModule,
    CorePipesModule,
    CoreSidebarModule,
    FormsModule,
    ContentHeaderModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxDatatableModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
    }),
    TranslateModule.forRoot(),

    //NgBootstrap
    NgbModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    NgxDatatableModule,

    ToastrModule.forRoot(),
    TranslateModule.forRoot(),
    ContextMenuModule,
    PerfectScrollbarModule,
    // Core modules
    CommonModule,
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreDirectivesModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,
    RouterModule.forChild(appRoutes),
    // App modules
    LayoutModule,
   
    
  ],

  bootstrap: [AppComponent],
 providers: [
 
AuthGuard,
  ListeOffreService,
  ListeCategorieService,
  
  ModifierOffreService,
AjouterCategorieService,
ModifierCategorieService,
ChatService,
AccountSettingsService
],
 exports: [ListeAdminComponent]
})
export class AppModule {}
