import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SetComponent } from './set/set.component';
import { GetComponent } from './get/get.component';

const routes: Routes = [
    {
        path:'a', component:AdminhomeComponent
    },
    {
        path:'u', component:UserhomeComponent
    },
    {
        path:'s', component:SetComponent
    },
    {
        path:'g', component:GetComponent
    }        
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
