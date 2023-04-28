import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { DetailsComponent } from './component/details/details.component';
import { TourHomeComponent } from './component/tour-home/tour-home.component';
import { TourGuideComponent } from './component/tour-guide/tour-guide.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './component/error/error.component';
import { HeaderComponent } from './component/header/header.component';
import { AuthInterceptorProviders } from './Middlewares/auth-interceptor';
import { FooterComponent } from './component/footer/footer.component';
import { TourDetailsComponent } from './component/tour-details/tour-details.component';
import { AdminStatisticsComponent } from './component/admin-statistics/admin-statistics.component';
import { UserregisterComponent } from './component/userregister/userregister.component';
import { PaymentComponent } from './component/payment/payment.component';
import { AdminReviewComponent } from './component/admin-review/admin-review.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    DetailsComponent,
    TourHomeComponent,
    TourGuideComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,

    TourDetailsComponent,
    AdminStatisticsComponent,

    TourDetailsComponent,
    UserregisterComponent,
    PaymentComponent,
    AdminReviewComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
