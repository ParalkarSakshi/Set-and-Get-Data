import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'user', loadChildren :()=> import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:'admin', loadChildren :()=> import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:'set', loadChildren :()=> import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:'get', loadChildren :()=> import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
