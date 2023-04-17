import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ErrorComponent } from './component/error/error.component';
import { TourHomeComponent } from './component/tour-home/tour-home.component';
import { DetailsComponent } from './component/details/details.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path: "home" , component:HomeComponent},
  {path:"about" , component:AboutUsComponent},
  {path:"contact" , component:ContactUsComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"tour" , component:TourHomeComponent},
  {path:"services" , component:DetailsComponent},
  {path:"header" , component:HeaderComponent},
  {path:"**" , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
