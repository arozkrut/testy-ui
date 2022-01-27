import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { TableComponent } from './table/table.component';
import { FormRESTService } from '../generated';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    TableModule,
  ],
  providers:[
    FormRESTService
  ]
})
export class FormsModule { }
