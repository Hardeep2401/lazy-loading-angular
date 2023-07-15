import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
   
  {
    path: 'admin', loadChildren:()=>import('./admin/admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path: 'user', loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)
  },
  {
    path: 'header', component : HeaderComponent
  },
  {
    path:'footer', component : FooterComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
