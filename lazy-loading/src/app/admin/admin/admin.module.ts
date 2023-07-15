import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
