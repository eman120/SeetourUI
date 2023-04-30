import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { UploadImageComponent } from './component/upload-image/upload-image.component';
import { UploadImagesComponent } from './component/upload-images/upload-images.component';

import { AuthInterceptorProviders } from './Middlewares/auth-interceptor';
import { FooterComponent } from './component/footer/footer.component';
import { TourDetailsComponent } from './component/tour-details/tour-details.component';
import { AdminStatisticsComponent } from './component/admin-statistics/admin-statistics.component';
import { UserregisterComponent } from './component/userregister/userregister.component';

import { PaymentComponent } from './component/payment/payment.component';
import { AdminReviewComponent } from './component/admin-review/admin-review.component';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';
import { QuestionAnswerComponent } from './component/question-answer/question-answer.component';




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
import { TourGuideProfileComponent } from './component/tour-guide-profile/tour-guide-profile.component';
import { TourguideDashboardComponent } from './component/tourguide-dashboard/tourguide-dashboard.component';
import { TourguideHeaderComponent } from './component/tourguide-header/tourguide-header.component';
import { TourSliderComponent } from './component/tour-slider/tour-slider.component';
import { ReviewListerComponent } from './component/review-lister/review-lister.component';
import { TGReviewsComponent } from './component/tgreviews/tgreviews.component';
import { TourListerComponent } from './component/tour-lister/tour-lister.component';
import { TGProfileInfoComponent } from './component/tgprofile-info/tgprofile-info.component';
import { TGOverviewComponent } from './component/tgoverview/tgoverview.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { ToursFilterComponent } from './component/tours-filter/tours-filter.component';
import { TGToursComponent } from './component/tgtours/tgtours.component';
import { ToursSectionFilterableComponent } from './component/tours-section-filterable/tours-section-filterable.component';


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


    AdminStatisticsComponent,
    TourDetailsComponent,
    PaymentComponent,
    AdminReviewComponent,
    PaymentSuccessComponent,
    QuestionAnswerComponent,


    UserregisterComponent,
    TourCardComponent,
    StarRatingComponent,
    LikeButtonComponent,
    TruncatePipe,
    WishListButtonComponent,
    UploadImageComponent,
    UploadImagesComponent,
    ReviewCardComponent,
    TourguideDashboardComponent,
    TourguideHeaderComponent,
    CreateTourComponent,
    GoogleMapsComponent,
    GalleryComponent,
    TourGuideProfileComponent,
    TourSliderComponent,
    ReviewListerComponent,
    TGReviewsComponent,
    TourListerComponent,
    TGProfileInfoComponent,
    TGOverviewComponent,
    SpinnerComponent,
    ToursFilterComponent,
    TGToursComponent,
    ToursSectionFilterableComponent

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
