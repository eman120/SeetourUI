import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { FormsModule,NgModel,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './component/error/error.component';
import { HeaderComponent } from './component/header/header.component';
import { UploadImageComponent } from './component/upload-image/upload-image.component';
import { UploadImagesComponent } from './component/upload-images/upload-images.component';

import { AuthInterceptorProviders } from './Middlewares/auth-interceptor';
import { FooterComponent } from './component/footer/footer.component';
import { TourDetailsComponent } from './component/tour-details/tour-details.component';
import { UserregisterComponent } from './component/userregister/userregister.component';
import { TourCardComponent } from './component/tour-card/tour-card.component';
import { StarRatingComponent } from './component/star-rating/star-rating.component';
import { LikeButtonComponent } from './component/like-button/like-button.component';
import { TruncatePipe } from './Pipes/truncate.pipe';
import { WishListButtonComponent } from './component/wish-list-button/wish-list-button.component';
import { CreateTourComponent } from './component/create-tour/create-tour.component';
import { GoogleMapsComponent } from './component/google-maps/google-maps.component';
import { DatePipe, CommonModule } from '@angular/common';
import { ReviewCardComponent } from './component/review-card/review-card.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { TourguideDashboardComponent } from './component/tourguide-dashboard/tourguide-dashboard.component';
import { TourguideHeaderComponent } from './component/tourguide-header/tourguide-header.component';
import { NgModule } from '@angular/core';

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
    UserregisterComponent,
    TourCardComponent,
    StarRatingComponent,
    LikeButtonComponent,
    TruncatePipe,
    WishListButtonComponent,
    UploadImageComponent,
    UploadImagesComponent,
    TourDetailsComponent,
    ReviewCardComponent,
    GalleryComponent,
    TourguideDashboardComponent,
    TourguideHeaderComponent,
    CreateTourComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule
  ],
  providers: [AuthInterceptorProviders,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
