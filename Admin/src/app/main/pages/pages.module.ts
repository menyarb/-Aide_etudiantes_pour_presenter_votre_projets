import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { CoreCommonModule } from '@core/common.module';


import { AuthenticationModule } from './authentication/authentication.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreCommonModule,

    NgbModule,
    NgSelectModule,
    FormsModule,
    AuthenticationModule,
    MiscellaneousModule
  ],

  providers: []
})
export class PagesModule {}
