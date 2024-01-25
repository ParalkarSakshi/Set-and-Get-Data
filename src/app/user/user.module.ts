import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SetComponent } from './set/set.component';
import { GetComponent } from './get/get.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserhomeComponent,
    AdminhomeComponent,
    SetComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
